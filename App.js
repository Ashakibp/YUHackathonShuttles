'use strict';
if (typeof global.self === "undefined") {
    global.self = global;
}
import React, {Component} from 'react';

import {StackNavigator} from 'react-navigation'
import Login from './Components/Login/Login'
import ChooseDirection from './Components/Shuttle/ChooseDirection'
import PickSide from './Components/Profile/PickSide'
import PickATime from './Components/Shuttle/PickATime'

const Navigation = StackNavigator({
    Login: {
        screen: Login,
    },
    'Choose Direction': {
        screen: ChooseDirection,
    },
    Profile: {
        screen: PickSide,
    },
    'Pick A Time': {
        screen: PickATime,
    }
});
export default Navigation