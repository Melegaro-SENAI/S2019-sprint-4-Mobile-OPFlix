import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './pages/login';
import MainScreen from './pages/main'
import ProfileScreen from './pages/profile';

const AuthStack = createStackNavigator({
    Sign: {screen: LoginScreen},
});

const MainNavigator = createBottomTabNavigator(
    {
        Main: {
            screen: MainScreen,
        }, 
        Profile: {
            screen: ProfileScreen,
        },
    },
    {
        initialRouteName: 'Main',
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeBackgroundColor: '#9900e6',
            inactiveBackgroundColor: '#b727ff',
            style: {
                width: '100%',
                height: 50
            }
        }
    },
);

export default createAppContainer
    (createSwitchNavigator(
        {
            MainNavigator,
            AuthStack,
        },
        {
            initialRouteName: 'AuthStack'
        },
    ),
);