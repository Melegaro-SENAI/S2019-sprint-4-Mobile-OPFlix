import React, {Component} from 'react';

import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    AsyncStorage,
    StyleSheet,
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
        this.props.navigation.navigate('CadastroNavigator');
    }

    render() {
        return (
            <View style={styles.fundo}>
                <TextInput style={styles.email}
                placeholder="email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                />
                <TextInput style={styles.senha}
                placeholder="senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}
                />
                <TouchableOpacity style={styles.btn_login} onPress={this._realizarLogin}>
                    <Text style={styles.text_login}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={this._irDeCadastro} style={{color: 'blue'}}>
                        Cadastre-se
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fundo: 
    {
        backgroundColor: 'white',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    email:
    {
        borderWidth: 2,
        color: '#fff',
        fontSize: 15,
        borderColor: '#474747',
        borderRadius: 50,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        width: 340,
        textAlign: 'center',
        margin: 40,
    },
    senha:
    {
        borderWidth: 2,
        color: '#fff',
        fontSize: 15,
        borderColor: '#474747',
        borderRadius: 50,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        width: 340,
        textAlign: 'center',
        margin: 40,
    },

    btn_login: 
    {
        borderWidth: 2,
        color: '#fff',
        fontSize: 15,
        borderColor: '#474747',
        borderRadius: 50,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        width: 340,
        textAlign: 'center',
        margin: 40,
        display: 'flex',
    },
});

export default Login;