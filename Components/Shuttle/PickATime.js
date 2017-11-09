import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Alert,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Login from '../../Components/Login/Login'

export default class ChooseDirection extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.navigation.state.params.email,
            password: this.props.navigation.state.params.password,
            direction: this.props.navigation.state.params.direction,
            times: this.props.navigation.state.params.times
        }
    }

    static navigationOptions = {
        title: 'Pick A Time',
    };

    async bookTime(time) {
        posi = time.indexOf("(") - 1;
        timeStr = time.substring(0, posi);
        Alert.alert(
            'Would you like to book this Shuttle?',
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
            let response = await fetch("http://18.221.232.220:8080/bookride/" + this.state.email + "/" + this.state.password + "/" + this.state.direction + "/" + time, {
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
            backgroundColor: '#015697',
            padding: 10,
            width: 300,
            margin: 5,
            justifyContent: 'center',
            borderRadius: 10,
            alignItems: 'center',
            height: 75,
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
        input: {
            margin: 15,
            height: 40,
            borderColor: '#000000',
            borderWidth: 1,
            width: 300
        },
        directionButtonText: {
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            justifyContent: 'center',
        },

    }
);