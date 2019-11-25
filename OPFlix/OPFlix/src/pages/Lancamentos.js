import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet, Image, ScrollView } from 'react-native';
//  import { FlatList } from 'react-native-gesture-handler';

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
            <View style={styles.main}>
                <ScrollView>

                    <Text>Comédia</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lancamentos.filter(item => { return item.IdCategoria === 2 })}
                        keyExtractor={item => item.IdLancamento}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.FotoLanc }}
                                />
                            </View>
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // tabBarEstilizacao:
    // {
    //     width: 25, height: 25,
    // },
    // title:
    // {
    //     fontSize: 30,
    //     textAlign: 'center',
    // },
    // estilizacaoLancamentos:
    // {
    //     backgroundColor: '#7482a3',
    // },
    // titulo: 
    // {
    //     fontSize: 30,
    //     textAlign: 'center',
    // },
    // dataLanc:
    // {
    //     textAlign: 'center',
    // },
    // sinopse:
    // {
    //     textAlign: 'center',
    // },
    // categoria:
    // {
    //     textAlign: 'center',
    // },
    img:
    {
        width: 200,
        height: 250,
    },
});

export default Lancamentos;