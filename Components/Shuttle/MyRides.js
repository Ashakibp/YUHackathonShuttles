import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Alert,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Navigator
} from 'react-native';
import Login from '../Login/Login'

export default class ChooseDirection extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.navigation.state.params.email,
            password: this.props.navigation.state.params.password,
        }
    }

    static navigationOptions = {
        title: 'My Rides',
    };

    async bookTime(time) {
        posi = time.indexOf("(") - 1;
        timeStr = time.substring(0, posi);
        Alert.alert(
            'Would you like to book this shuttle?',
            timeStr,
            [
                {text: 'Cancel'},
                {text: 'Book it!', onPress: () => this.setTime(timeStr)},
            ],
            {cancelable: false}
        )
    }

    async setTime(time) {
        try {
            let response = await fetch("http://127.0.0.1:8080/bookride/" + this.state.email + "/" + this.state.password + "/" + this.state.direction + "/" + time, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
                .then((responseData) => {
                    if (responseData['worked'] == true) {
                        alert("Shuttle is Booked!");
                        this.props.navigation.navigate('Profile', {
                            email: this.state.email,
                            password: this.state.password
                        });
                    }
                }).done();
        }
        catch (error) {
            alert("Something went wrong :(");
            return (<Login/>);

        }
    }

    render() {
        let buttonList = this.state.times;
        buttonsListArr = [];
        console.log(buttonList);

        for (let i = 0; i < buttonList.length; i++) {
            buttonsListArr.push(
                <TouchableOpacity style={styles.directionButton} onPress={() => this.bookTime(buttonList[i])}><Text
                    style={styles.directionButtonText}>{buttonList[i]}</Text></TouchableOpacity>
            );
        }
        return (
            <View style={styles.container}>
                <ScrollView>
                    {buttonsListArr}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        directionButton: {
            backgroundColor: '#1433dc',
            padding: 30,
            width: 300,
            margin: 15,
            justifyContent: 'center',
            borderRadius: 15,
            alignItems: 'center',
            height: 25,
        },
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
            fontSize: 60,
            textAlign: 'center',
            margin: 10,
            marginBottom: 60
        },
        input: {
            margin: 15,
            height: 40,
            borderColor: '#000000',
            borderWidth: 1,
            width: 300
        },
        directionButtonText: {
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            justifyContent: 'center',
        },
        instructions: {
            fontSize: 50,
            textAlign: 'center',
            margin: 30,
            marginBottom: 80
        },

    }
);