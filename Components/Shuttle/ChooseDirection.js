import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


export default class ChooseDirection extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.navigation.state.params.email,
            password: this.props.navigation.state.params.password,
            direction: null
        }
    }

    static navigationOptions = {
        title: 'Choose Direction',
    };

    async chooseDirection(direction) {
        this.state.direction = direction;
        try {
            let response = await fetch("http://127.0.0.1:8080/gettimes/" + this.state.email + "/" + this.state.password + "/" + this.state.direction, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
                .then((responseData) => {
                        this.props.navigation.navigate('Pick A Time', {
                            email: this.state.email,
                            password: this.state.password,
                            direction: this.state.direction,
                            times: responseData["times"]
                        });
                    }
                ).done();
        }
        catch (error) {
            alert("Something went wrong - Please check your login");
            return (<Login/>);

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    Where do you want to go?
                </Text>
                <TouchableOpacity
                    style={styles.directionButton}
                    onPress={() => this.chooseDirection("wilf")}>
                    <Text style={styles.directionButtonText}> Wilf </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.directionButton}
                    onPress={() => this.chooseDirection("beren")}>
                    <Text style={styles.directionButtonText}> Beren </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        directionButton: {
            backgroundColor: '#015697',
            padding: 10,
            width: 250,
            margin: 15,
            justifyContent: 'center',
            borderRadius: 10,
            alignItems: 'center',
            height: 75,
        },
        instructions: {
            fontSize: 30,
            textAlign: 'center',
            margin: 10,
            marginBottom: 50,
            color: '#015697',
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fbfbff',
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
            fontSize: 30,
            textAlign: 'center',
            justifyContent: 'center',
        },

    }
);