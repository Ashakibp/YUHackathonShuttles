import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Alert,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import Login from '../Login/Login'
import Spinner from 'react-native-loading-spinner-overlay';

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
            this.setState({visible: true});
            let response = await fetch("http://18.217.21.25:8080/bookride/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username : this.state.email,
                    password: this.state.password,
                    direction: this.state.direction,
                    time: time
                })
            });
                    const responseData = await response.json();
                    if (responseData['worked'] === true) {
                        this.setState({visible: false});
                        setTimeout(() => {
                            alert("Shuttle has been booked!");
                        }, 1);
                        this.props.navigation.navigate('Profile', {
                            email: this.state.email,
                            password: this.state.password
                        });
                    }
                    else {
                        this.setState({visible: false});
                        setTimeout(() => {
                            alert("Something went wrong");
                        }, 1);
                    }
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
                <Spinner visible={this.state.visible} textContent={"Booking the ride"}
                         textStyle={{color: '#FFFF'}}/>
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