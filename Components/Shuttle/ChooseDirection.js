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
                <Text style={styles.instructions}>
                    Please choose your direction
                </Text>
                <TouchableOpacity
                    style = {styles.directionButton}
                    onPress =  {this.chooseDirection("Wilf")}>
                    <Text style = {styles.directionButtonText}> Wilf </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.directionButton}
                    onPress =  {this.chooseDirection("Beren")}>
                    <Text style = {styles.directionButtonText}> Beren </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        directionButton: {
            backgroundColor: '#1433dc',
            padding: 10,
            width: 250,
            margin: 15,
            justifyContent: 'center',
            borderRadius: 15,
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
        directionButtonText:{
            color: 'white',
            fontSize: 30,
            textAlign: 'center',
            justifyContent: 'center',
        },
        instructions: {
            fontSize: 30,
            textAlign: 'center',
            margin: 50,
        },

    }
);