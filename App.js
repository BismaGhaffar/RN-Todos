import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import Home from './components/Home';
import Main from './components/Main';
import * as  firebase from 'firebase';

// var config = {
//   apiKey: "AIzaSyCmhaAenmmITtSjyHcsDchNMVwuVkSIFp4",
//   authDomain: "todos-reactnative786.firebaseapp.com",
//   databaseURL: "https://todos-reactnative786.firebaseio.com",
//   projectId: "todos-reactnative786",
//   storageBucket: "todos-reactnative786.appspot.com",
//   messagingSenderId: "439878026746"
// };
// firebase.initializeApp(config);
export default class App extends Component{

  constructor() {
    super();
    this.state = {
 check_status:false
    };
  }


  // componentWillMount() {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyCmhaAenmmITtSjyHcsDchNMVwuVkSIFp4",
  // authDomain: "todos-reactnative786.firebaseapp.com",
  //   }

  //   const config=firebase.initializeApp(firebaseConfig);

  //   console.log(123);
  //   console.log(firebase);
  // }

  componentDidMount() {
    let config = {
      apiKey: "AIzaSyCmhaAenmmITtSjyHcsDchNMVwuVkSIFp4",
  authDomain: "todos-reactnative786.firebaseapp.com",
  databaseURL: "https://todos-reactnative786.firebaseio.com",
  projectId: "todos-reactnative786",
  storageBucket: "todos-reactnative786.appspot.com",
  messagingSenderId: "439878026746"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged in",user.uid);
        this.setState({ check_status: true })
      } else {
        console.log("user logged out");
        this.setState({ check_status: false })
      }
    })
  }
 
render_components=()=>{
  if(this.state.check_status){
    return(
    <Main/>
    )
  }

  else{
return(
<Home />

)
  }



}
 
  render() {

    return (
      <View style={styles.container}>
       <StatusBar backgroundColor="#757575" barStyle="light-content" />

       {this.render_components()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
