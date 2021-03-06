import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    AsyncStorage,

} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

export default class Login extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            visible: false
        }
    }

    static navigationOptions = {
        title: 'Login',
        headerLeft: null
    };

    componentDidMount() {
            this.getUsernameAndPassword()
    }



    async getUsernameAndPassword(){
        try{
            const email = await AsyncStorage.getItem('username');
            const password = await AsyncStorage.getItem('password');

            if(email != null && password != null){
                this.setState({
                    email: email,
                    password: password
                });
                this.props.navigation.navigate('Profile', {
                    email: this.state.email,
                    password: this.state.password,
                });
            }
        }
        catch(error){
        }
    }

    async storeUsernameAndPassword(){
        try{
            await AsyncStorage.setItem('username', this.state.email);
            await AsyncStorage.setItem('password', this.state.password);
        }
        catch(error){
            console.log("ERROR");
        }
    }



    async login(email, password) {
        if (email === null || password === null) {
            alert("Username and password must be full");
        }
        else {
            try {
                this.setState({visible: true});
                let response = await fetch("http://18.217.21.25:8080/login/",{
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: this.state.email,
                            password: this.state.password
                        })
                    });
                    const responseData = await response.json();
                    if (responseData['login'] === true) {
                        this.setState({visible: false});
                        this.storeUsernameAndPassword();
                        this.props.navigation.navigate('Profile', {
                            email: this.state.email,
                            password: this.state.password,
                        });
                    }
                    else {
                        this.setState({visible: false});
                    setTimeout(() => {
                        alert("Invalid login");
                    }, 1);
                }
            }

            catch (error) {
                this.setState({visible: false});
                setTimeout(() => {
                    alert("Something went wrong - please check your login");
                }, 1);

            }
        }
    }


    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <Image style={styles.imageStyle} source={require('./Resources/yuLogo.png')}/>
                <Text style={styles.welcome}>
                    YUShuttles
                </Text>
                <Spinner visible={this.state.visible} textContent={"Loading"}
                         textStyle={{color: '#FFFFFF'}}/>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Email or Username"
                           placeholderTextColor="#000000"
                           autoCapitalize="none"
                           onChangeText={(email) => this.setState({email})}/>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Password"
                           placeholderTextColor="#000000"
                           autoCapitalize="none"
                           secureTextEntry={true}
                           onChangeText={(password) => this.setState({password})}/>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.login(this.state.email, this.state.password)}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
                <View style={{height: 60}}/>
            </KeyboardAvoidingView>
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
            width: 175,
            height: 175
        },
        welcome: {
            fontSize: 40,
            textAlign: 'center',
            margin: 10,
            color: '#015697',
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
            backgroundColor: '#015697',
            padding: 10,
            borderRadius: 10,
            margin: 15,
            height: 50,
            width: 150,
        },
        submitButtonText: {
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
        },

    }
);