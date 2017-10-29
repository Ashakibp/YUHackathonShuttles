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
  View, Image, TouchableOpacity, TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Login extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }
    login(email, password){
        if(email == null|| password == null){
            alert("Username and password must be full")
        }
        else{

        }
    }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle } source={require('./Resources/YuLogo.png')} />
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <Text style={styles.instructions}>
          Please Login
        </Text>
        <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Email"
                   placeholderTextColor = "#000000"
                   autoCapitalize = "none"
                   onChangeText = {(email) => this.setState({email})}/>

        <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Password"
                   placeholderTextColor = "#000000"
                   autoCapitalize = "none"
                   onChangeText = {(password) => this.setState({password})}/>

        <TouchableOpacity
            style = {styles.submitButton}
            onPress = {() => this.login(this.state.email, this.state.password)}>
          <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
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