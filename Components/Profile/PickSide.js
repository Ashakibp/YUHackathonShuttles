import React, {Component} from 'react';


import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class PickSide extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.navigation.state.params.email,
            password: this.props.navigation.state.params.password,
            direction: null
        }
    }

    static navigationOptions = {
        title: 'Profile',
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                visible: !this.state.visible
            });
        }, 3000);
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.directionButton}
                    onPress={() => {
                        this.props.navigation.navigate('Choose Direction', {
                            email: this.state.email,
                            password: this.state.password,
                            direction: this.state.direction,
                        })
                    }}>
                    <Text style={styles.directionButtonText}> Book A Ride </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.directionButton}
                    onPress={() => alert("This feature is currently under development :(")}>
                    <Text style={styles.directionButtonText}> My Rides </Text>
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
            fontSize: 30,
            textAlign: 'center',
            justifyContent: 'center',
        },

    }
);