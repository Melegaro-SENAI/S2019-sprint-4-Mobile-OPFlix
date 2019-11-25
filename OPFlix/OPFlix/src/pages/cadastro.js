import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Cadastro extends Component {
    constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }
    }

    _realizarCadastro = async() => {
        // console.warn(this.state.email + this.state.senha);
      await fetch('http://192.168.3.47:5000/api/Usuario', {
              nome: this.state.nome,
              email: this.state.email,
              senha: this.state.senha
          
          })
          .then(data => this._irParaHome(data))
          .catch(erro => console.warn(erro)); 
      };

    _irParaHome = () => {
        try {
            this.props.navigation.navigate('MainNavigator');
        } catch (error) {
            console.warn(error)
        }
    }  
    
render() { 
    return (
        <View style={styles.fundo}>
            <Text style={styles.mensagem_titulo}>
                OPFLIX
            </Text>
            <Text style={styles.mensagem_boasvindas}>
                Cadastre-se para ficar por dentro do mundo do cinema!
            </Text>
            <TextInput style={styles.nome}
            placeholder="nome"
            onChangeText={nome => this.setState({nome})}
            value={this.state.nome}
            />
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
            <TouchableOpacity style={styles.btn_cadastrar} onPress={this._realizarCadastro}>
                <Text>
                    Cadastro
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
    nome: 
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
        marginTop: 20,
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
        marginTop: 20,
    },

    btn_cadastrar:
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
        marginTop: 20,
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


export default Cadastro;