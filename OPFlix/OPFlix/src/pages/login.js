import React, {Component} from 'react';

import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';

class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            email: 'erik@gmail.com',
            senha: '123456',
        };
    }

    _realizarLogin = async () => {
        await fetch('http://192.168.3.47:5000/api/Login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
            .then(resposta => resposta.json())
            .then(data => this._irParaHome(data.token))
            .catch(erro => console.warn(erro));
    };

    _irParaHome = async (tokenAReceber) => {
        if (tokenAReceber != null) {
            try {
                await AsyncStorage.setItem('@opflix:token', tokenAReceber);
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {}
        }
    };

    _irDeCadastro = () => {
        this.props.navigation.navigate('MainNavigator');
    }

    render() {
        return (
            <View>
                <TextInput
                placeholder="email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                />
                <TextInput
                placeholder="senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}
                />
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._irParaCadastro}>
                    <Text style={{color: 'blue'}}>
                        Cadastre-se
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Login;