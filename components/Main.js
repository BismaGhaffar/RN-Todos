import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Todos from './Todos';
import TodoForm from './TodoForm';
import Logout from './Logout';
import { NativeRouter, Route, Link } from "react-router-native";


export default class Main extends Component {
  render() {
    return (
    
<NativeRouter>
    <View  style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#90ee02" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link to="/addtodos" underlayColor="#90ee02" style={styles.navItem}>
          <Text>Add Todos</Text>
        </Link>
        <Link to="/logout" underlayColor="#90ee02" style={styles.navItem}>
          <Text>Logout</Text>
        </Link>
      </View>

      <Route exact path="/" component={Todos} />
      <Route path="/addtodos" component={TodoForm} />
      <Route path="/logout" component={Logout} />
    </View>
  </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    color: 'red'
  
  },
  header: {
    fontSize: 20
  },
  nav: {

    backgroundColor:'#61d800',
    width:'100%',
    color: 'red',
    margin:0,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    
    alignItems: "center",
    padding: 20
   
  }

});
