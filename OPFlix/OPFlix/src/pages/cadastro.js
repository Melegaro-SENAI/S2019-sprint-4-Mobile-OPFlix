import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

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
        <View>
            <TextInput
            placeholder="nome"
            onChangeText={nome => this.setState({nome})}
            value={this.state.nome}
            />
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
            <TouchableOpacity onPress={this._realizarCadastro}>
                <Text>
                    Cadastro
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

export default Cadastro;