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


export default class ChooseDirection extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            direction: null
        }
    }

    chooseDirection(direction){
        this.state.direction = direction;
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Please Choose your direction
                </Text>
                <TouchableOpacity
                    style = {styles.directionButton}
                    onPress =  {this.chooseDirection("Wilf")}>
                    <Text style = {styles.submitButtonText}> Wilf </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.directionButton}
                    onPress =  {this.chooseDirection("Beren")}>
                    <Text style = {styles.submitButtonText}> Beren </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        directionButton: {
            backgroundColor: '#1433dc',
            padding: 50,
            margin: 30,
            justifyContent: 'center',
            alignItems: 'center',
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
            color: 'white',
            fontSize: 30,
            textAlign: 'center',
            justifyContent: 'center',
        },
        instructions: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },

    }
);