import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/login';
import LancamentosScreen from './pages/Lancamentos'
import ProfileScreen from './pages/profile';
import CadastroScreen from './pages/cadastro';

const AuthStack = createStackNavigator({
    Sign: { screen: LoginScreen },
});

const CadastroNavigator = createStackNavigator({
    Para: { screen: CadastroScreen },
});

const MainNavigator = createBottomTabNavigator(
    {
        Lancamentos: {
            screen: LancamentosScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
    },
    {
        initialRouteName: 'Lancamentos',
        tabBarOptions: {
            showLabel: true,
            showIcon: false,
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
            CadastroNavigator,
        },
        {
            initialRouteName: 'AuthStack'
        },
    ),
    );