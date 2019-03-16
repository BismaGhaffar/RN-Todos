import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
<Image source={require('../images/logo.png')} style={{width: 100, height: 100}}  />
<Text style={{fontSize:20, color:'black',marginVertical:15}}> Todo..</Text>
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
