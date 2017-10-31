/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Navigator
} from 'react-native';

import Login from './Components/Login/Login'
export default class Home extends Component{
    render() {
        return (
            <Login />
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbfbff',
  },
  imageStyle: {
      width: 130,
      height: 130
    },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        width: 300
    },
    submitButton: {
        backgroundColor: '#1433dc',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    },
  instructions: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },

});