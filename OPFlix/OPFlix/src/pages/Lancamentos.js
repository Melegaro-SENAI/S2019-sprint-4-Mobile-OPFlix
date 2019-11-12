import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
class Lancamentos extends Component {
    constructor() {
        super();
        this.state = {
            categorias: [],
        };
    }

    componentDidMount() {
        this._carregarLancamentos();
    }

    _carregarLancamentos = async () => {
        await fetch('http://192.168.3.47:5000/api/Lancamento')
            .then(resposta => resposta.json())
            .then(data => this.setState({ lancamentos: data }))
            .catch(erro => console.warn(erro));
    };

    render() {
        return (
            <FlatList
                data={this.state.lancamentos}
                keyExtractor={item => item.idlancamentos}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.title}>{item.nome}</Text>
                        <Text >{item.dataLancamento}</Text>
                        <Image
                            style={styles.imageIt}
                            source={{uri: '5320567.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg'}}
                        />
                        <Text >{item.sinopse}</Text>
                    </View>
                )}
            />
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