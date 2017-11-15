import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


import Spinner from 'react-native-loading-spinner-overlay';

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
        this.toggleState();
        try {
            let response = await fetch("http://18.221.232.220:8080/gettimes/" + this.state.email + "/" + this.state.password + "/" + this.state.direction, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
                .then((responseData) => {
                        this.toggleState();
                        this.props.navigation.navigate('Pick A Time', {
                            email: this.state.email,
                            password: this.state.password,
                            direction: this.state.direction,
                            times: responseData["times"]
                        });
                    }
                ).done();
        }
        catch (err) {
            this.toggleState();
            alert("Something went wrong - please check your login");
            return (<Login/>);

        }
    }

    toggleState = () => {
        this.setState({visible: !this.state.visible});
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    Where do you want to go?
                </Text>
                <Spinner visible={this.state.visible} textContent={"Sorry, this loading time is YU's fault"}
                         textStyle={{color: '#FFFF'}}/>
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