import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/login';
import MainScreen from './pages/main'
import ProfileScreen from './pages/profile';
import CadastroScreen from './pages/cadastro';

const AuthStack = createStackNavigator({
    Sign: { screen: LoginScreen },
});

const Cadastro = createStackNavigator({

    De: { screen: LoginScreen },
    Para: { screen: CadastroScreen },
});

const CadastroNavigator = createBottomTabNavigator(
    {
        Cadastro: {
            screen: CadastroScreen,
        },
    },
)

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
            activeBackgroundColor: '#000000',
            inactiveBackgroundColor: '#2b2b2b',
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
            Cadastro,
            CadastroNavigator,
        },
        {
            initialRouteName: 'AuthStack'
        },
    ),
    );