import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

import {Text, View, Image, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

class Main extends Component {
    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/110825-pipoca.png')}
                style={styles.tabBarEstilizacao}
            />
        ),
    };

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
        await fetch('http://localhost:5000/api/lancamentos')
        .then(resposta => resposta.json())
        .then(data => this.setState({categorias: data}))
        .catch(erro => console.warn(erro));
    };

    render() {
        return (
            <FlatList
              data={this.state.categorias}
                keyExtractor={item => item.idCategoria}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.nome}</Text>
                    </View>
                )}
            />
        );
    }   
}

const styles = StyleSheet.create({
    tabBarEstilizacao:
    {width: 25, height: 25, tintColor: 'white'}
})

export default Main;