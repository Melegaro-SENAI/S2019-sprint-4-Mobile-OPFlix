import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Cadastro extends Component {
    constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
            senha: '',
        }
    }

    _realizarCadastro = async() => {
        // console.warn(this.state.email + this.state.senha);
      await fetch('http://192.168.3.47:5000/api/login', {
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
              email: this.state.email,
              senha: this.state.senha
          }),
        })
          .then(resposta => resposta.json())
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
  
    
    render() {
        return (
        <View>
            <TextInput
            placeholder="email"
            />
            <TextInput
            placeholder="senha"
            />
            <TouchableOpacity>
                <Text onPress={this._realizarCadastro}>Cadastro
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

export default Cadastro;