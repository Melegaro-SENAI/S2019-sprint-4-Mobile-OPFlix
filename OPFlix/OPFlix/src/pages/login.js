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
                <Text style={styles.mensagem_titulo}>
                    OPFLIX
                </Text>
                <Text style={styles.mensagem_boasvindas}>
                    Bem-Vindo! Faça login para acessar nossos conteúdos
                </Text>
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
                    <Text  onPress={this._irDeCadastro} style={styles.btn_cadastro}>
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
        backgroundColor: '#545353',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    email:
    {
        backgroundColor: '#939292',
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
        margin: 35,
    },
    senha:
    {
        backgroundColor: '#939292',
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
        margin: 35,
        marginTop: 10,
    },

    btn_login: 
    {
        backgroundColor: '#898888',
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
        margin: 35,
        display: 'flex',
        marginTop: 10,
    },
    btn_cadastro:
    {
        fontSize: 20,
        color: 'blue',      
        textAlign: 'center',
    },
    mensagem_boasvindas: 
    {
        fontStyle: 'italic',
        fontSize: 20,
        textAlign: 'center',
        color: '#e30b0b',
    },
    mensagem_titulo: 
    {
        fontStyle: 'italic',
        fontSize: 50,
        textAlign: 'center',
        color: '#e30b0b',
        margin: 20,
    },
});

export default Login;