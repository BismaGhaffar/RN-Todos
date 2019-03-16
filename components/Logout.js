import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import * as  firebase from 'firebase';
export default class Logout extends Component {
  render() {
    return (

      <View>


      <View>
<Text style={{fontSize:20, color:'black',marginVertical:15}}> todo form</Text>
      </View>

<Button
title="Sign out"
onPress={() => firebase.auth().signOut()} />

</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },

});
