import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['name', 'subject'];

import { FlatList } from 'react-native-gesture-handler';
class Main extends Component {
    constructor() {
        super();
        this.state = {
            categorias: [],
            searchTerm: '',
        };
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
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
        const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <View style={styles.container}>
            <SearchInput 
              onChangeText={(term) => { this.searchUpdated(term) }} 
              style={styles.searchInput}
              placeholder="Type a message to search"
              />
            <ScrollView>
              {filteredEmails.map(email => {
                return (
                  <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                    <View>
                      <Text>{email.user.name}</Text>
                      <Text style={styles.emailSubject}>{email.subject}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
            <FlatList
                data={this.state.lancamentos}
                keyExtractor={item => item.idlancamentos}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.title}>{item.nome}</Text>
                        <Text >{item.dataLancamento}</Text>
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
    SearchInput:
    {   
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1,
    },
});

export default Main;