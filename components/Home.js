import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Logo from './Logo';
import Login from './Login'

export default class Home extends Component{
  render() {
    return (
      <View>
        <Logo/>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
