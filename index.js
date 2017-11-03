import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation'
import App from './App';
import Login from './Components/Login/Login'
import ChooseDirection from './Components/Shuttle/ChooseDirection'

const Navigation = StackNavigator({
    LoginScreen: {
        screen: Login,
    },
    ChooseDirectionScreen: {
        screen: ChooseDirection,
    },
});
export default Navigation
AppRegistry.registerComponent('YUHackathon', () => App);