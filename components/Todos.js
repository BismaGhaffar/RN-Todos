import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList } from 'react-native';
import * as firebase from 'firebase';
 var config = {
      apiKey: "AIzaSyCmhaAenmmITtSjyHcsDchNMVwuVkSIFp4",
      authDomain: "todos-reactnative786.firebaseapp.com",
      databaseURL: "https://todos-reactnative786.firebaseio.com",
      projectId: "todos-reactnative786",
      storageBucket: "todos-reactnative786.appspot.com",
      messagingSenderId: "439878026746"
    };


export default class Todos extends Component {

  constructor(props){
    super(props);
    this.state={
      todos:[]
    }
  }
    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {

        firebase
        .database()
        .ref()
        .child('plans').child(user.uid).once("value",(snap)=>{
const data=snap.val();
console.log('fffff',snap.val());
            if(data){

              console.log(data);
                const container=[];
                Object
                .keys(data)
                    .forEach(plan=>container
                    .push(data[plan]));
                    this.setState({todos:container})

                    console.log("check",this.state.todos)
                    
                
            }


//          firebase1
//         .database()
//         .ref()
//         .child('plans')
//         .on('child_addedd',(snapshot)=>{

//             const data=snapshot.val;
//             if(snapshot.val){

//                 console.log("child added")
//             const data=snapshot.val;
//             this.setState((prevstate)=>{

// List:prevstate.plan
//             })

//             }



//         })



        })

      // }
    })
  }
  








  render() {

    const render_elements=this.state.todos.map((plan,index)=>{

{/* <li key={index}>{plan}</li> */}



const check=this.state.todos.map((plan,keys)=>{




})

    });
    return (


      <View>


      <View>
<Text style={{fontSize:20, color:'black',marginVertical:15}}> Todos</Text>
      </View>

<View>
<FlatList
          data={this.state.todos}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.day}</Text>
            <Text style={styles.email}>{item.plan}</Text>
          </View>
          }
          keyExtractor={item => item.email}
        />
</View>

</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  }
  
});