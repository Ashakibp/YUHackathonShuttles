/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Navigator,
} from 'react-native';

export default class Login extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }

    static navigationOptions = {
        title: 'LoginScreen',
    }

    async login(email, password) {
        if (email == null || password == null) {
            alert("Username and password must be full");
        }
        else {
            try {
                let response = await fetch("http://127.0.0.1:8080/login/" + this.state.email + "/" + this.state.password, {
                    method: 'get',
                        headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                }
                }).then((response) => response.json())
                    .then((responseData) => {
                    if(responseData['login'] == true){
                        this.props.navigation.navigate('ChooseDirectionScreen', { email: this.state.email, password: this.state.password });
                    }
                    else{
                        alert("Invalid Login");
                    }
                    }).done();
            }
            catch (error) {
                alert("Something went wrong - Please check your login");
                return (<Login/>);

            }
        }
    }


    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle } source={require('./Resources/yuLogo.png')} />
                <Text style={styles.welcome}>
                    YU Shuttles
                </Text>
                <Text style={styles.instructions}>
                    Please Login
                </Text>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Email or Username"
                           placeholderTextColor = "#000000"
                           autoCapitalize = "none"
                           onChangeText = {(email) => this.setState({email})}/>

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Password"
                           placeholderTextColor = "#000000"
                           autoCapitalize = "none"
                           secureTextEntry={true}
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
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        paddingLeft: 10,
        padding: 5,
        margin: 10,
        height: 50,
        borderColor: '#000000',
        borderRadius: 5,
        borderWidth: 1,
        width: 300,
    },
    submitButton: {
        backgroundColor: '#1433dc',
        padding: 10,
        borderRadius: 5,
        margin: 15,
        height: 50,
        width: 150,
    },
    submitButtonText:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    instructions: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

}
);
