import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { FlatList } from 'react-native-gesture-handler';

class Lancamentos extends Component {
    constructor() {
        super();
        this.state = {
            lancamentos: [],
        };
    }

    componentDidMount() {
        this._carregarLancamentos();
    }

    _carregarLancamentos = async () => {
        await fetch('http://192.168.3.47:5000/api/Lancamento')
            .then(resposta => resposta.json())
            .then(data => {
                
                this.setState({ lancamentos: data })
            })
            .catch(erro => console.warn(erro))
    };

    render() {
        return (
            // <View>
            //     <TextInput
            //     placeholder="Escreva uma categoria..."
                // />
                // {/* criar um textinput */}
                // {/* criar uma acao que quando o usuario digitar a categoria, deve buscar na api e listar */}
                // {/* console.warn(data.filter(x => x.categoria == 'Terror')) */}

                <FlatList
                    data={this.state.lancamentos}
                    keyExtractor={item => item.idlancamentos}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.title}>{item.nome}</Text>
                            <Text >{item.dataLancamento}</Text>
                            <Text >{item.sinopse}</Text>
                            <Text >{item.categoria}</Text>
                        </View>
                    )}
                />
            // {/* </View> */}
        ); 
    }
}

const styles = StyleSheet.create({
    tabBarEstilizacao:
    {
        width: 25, height: 25,
    },
    title:
    {
        fontSize: 30,
    },

});

export default Lancamentos;