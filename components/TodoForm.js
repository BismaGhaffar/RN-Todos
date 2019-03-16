import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';
import * as firebase from 'firebase';
 var config = {
      apiKey: "AIzaSyCmhaAenmmITtSjyHcsDchNMVwuVkSIFp4",
      authDomain: "todos-reactnative786.firebaseapp.com",
      databaseURL: "https://todos-reactnative786.firebaseio.com",
      projectId: "todos-reactnative786",
      storageBucket: "todos-reactnative786.appspot.com",
      messagingSenderId: "439878026746"
    };
    //firebase1.initializeApp(config);

export default class TodoForm extends Component {

    constructor(props){

        super(props);

        this.state={
            plan:'',
            day:'',
            List:''
        }

        this.addtodo= this.addtodo.bind(this);
    }



    addtodo(){
console.log("from add todos");


firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
if(this.state.plan && this.state.day){

  console.log("1",user.uid);
const todo=firebase.database().ref('plans').child(user.uid).push();
todo.set({plan:this.state.plan ,day:this.state.day},()=>{
    this.setState({
       plan:'',
       day:''
    })
});
}


else{
  return;
}


  // }


    })
  
  
  }
  
  render() {
    return (

        <View style={styles.container}>


      <View >
<Text style={{fontSize:20, color:'black',textAlign:'left',
marginBottom:10}}>Add Todo</Text>
      </View>

      <View style={styles.textbox}>

      <TextInput
        style={{height: 40, width:'100%', borderColor: 'gray', borderWidth: 1}}
        onChangeText={(plan) => this.setState({plan})}
        placeholder="what do you need to do?"
        value={this.state.plan}
      />
      
      </View>





      <View style={styles.textbox}>

<TextInput 
  onChangeText={(day) => this.setState({day})}
  placeholder="what is it due?"
  value={this.state.day}
/>

</View>

<Button
  style={styles.button}
  onPress={this.addtodo}
  title="Add"
  color="#1de9b6"

/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  textbox:{
    width:'100%',
    marginVertical:20
  }

});
