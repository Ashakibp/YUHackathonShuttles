import React, { Component } from 'react';

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


export default class ChooseDirection extends Component<{}> {
    constructor(props){
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
async bookTime(time){
    Alert.alert(
        'Would you like to book this Shuttle?',
        time,
        [
            {text: 'Cancel'},
            {text: 'Book it!', onPress: () => console.log('Ask me later pressed')},
        ],
        { cancelable: false }
    )


}

render(){
        let buttonList = this.state.times;
        buttonsListArr = [];
        console.log(buttonList);

        for (let i = 0; i < buttonList.length; i++)
        {
        buttonsListArr.push(
            <TouchableOpacity style={styles.directionButton} onPress =  {() => this.bookTime(buttonList[i])}><Text style = {styles.directionButtonText}>{buttonList[i]}</Text></TouchableOpacity>
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
            marginBottom:60
        },
        input: {
            margin: 15,
            height: 40,
            borderColor: '#000000',
            borderWidth: 1,
            width: 300
        },
        directionButtonText:{
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