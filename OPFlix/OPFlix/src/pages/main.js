import React, {Component} from 'react';
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
        await fetch('http://192.168.3.47:5000/api/Lancamento')
        .then(resposta => resposta.json())
        .then(data => this.setState({lancamentos: data}))
        .catch(erro => console.warn(erro));
    };

    render() {
        return (
            <FlatList
              data={this.state.lancamentos}
                keyExtractor={item => item.idlancamentos}
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
    {width: 25, height: 25,}
})

export default Main;