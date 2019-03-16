import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,secureTextEntry } from 'react-native';
import * as  firebase from 'firebase';
import { black } from 'ansi-colors';
export default class Login extends Component{


constructor(props){
        super(props);
        this.state={
            Email:'',
            Pass:'',
            error:'',
            successmsg:''
        }

this.OnPress=this.OnPress.bind(this);

    }

 

    OnPress(){
      console.log("hello from button")
      const { Email, Pass } = this.state;
      firebase.auth().signInWithEmailAndPassword(Email, Pass)
        .then(this.onSuccess.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(Email, Pass)
            .then(this.onSuccess.bind(this))
            .catch((error) => {
              let errorCode = error.code
              let errorMessage = error.message;
              if (errorCode == 'auth/weak-password') {
                this.onFail.bind(this)('Weak password!')
              } else {
                this.onFail.bind(this)(errorMessage)
              }
            });
        });


    }


    onSuccess(){
      this.setState({Email:'',Pass:'',successmsg:'Login Successfully'});
    }


    onFail(err){
      this.setState({error:err});
    }
  render() {
    return (


      <View>

<Text color='red'>{this.state.error}</Text>


      

<Text color='red'>{this.state.successmsg}</Text>
       
       <TextInput
        style={styles.textbox}
        onChangeText={Email => this.setState({ Email })}
        placeholder="Email"
        value={this.state.Email}
      />


<TextInput
        style={styles.textbox}
        onChangeText={Pass => this.setState({ Pass })}
        placeholder="Pass"
        secureTextEntry
        value={this.state.Pass}
      />
       <Button
  style={styles.button}
  onPress={this.OnPress}
  title="Login"
  color="#1de9b6"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  textbox:{

    height: 50, 
    color:'black',
    width:300,
    borderColor: '#9e9e9e',
     borderWidth: 5,
     margin:5,
     paddingTop:5,
     paddingBottom:5,

     paddingLeft:15,
     paddingRight:15,
      borderRadius:10
  },
  button:{

    marginVertical:10
  }

});
