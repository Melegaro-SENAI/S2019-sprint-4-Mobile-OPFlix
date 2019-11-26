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
                    <Text style={styles.categoria}>Comédia</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lancamentos.filter(item => { return item.idCategoria === 1 })}
                        keyExtractor={item => item.idLancamento}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />
                            </View>
                        )}
                    />
                    <Text style={styles.categoria}>Drama</Text>
                    <FlatList
                         horizontal={true}
                         data={this.state.lancamentos.filter(item => { return item.idCategoria === 2 })}
                         keyExtractor={item => item.idLancamento}
                         renderItem={({ item }) => (
                             <View>
                                 <Image
                                     style={styles.img}
                                     source={{ uri: item.fotoLanc }}
                                 />
                             </View>
                         )}
                     />
                         <Text style={styles.categoria}>Ficção Científica</Text>
                         <FlatList
                              horizontal={true}
                              data={this.state.lancamentos.filter(item => { return item.idCategoria === 3 })}
                              keyExtractor={item => item.idLancamento}
                              renderItem={({ item }) => (
                                  <View>
                                      <Image
                                          style={styles.img}
                                          source={{ uri: item.fotoLanc }}
                                      />
                                  </View>
                              )}
                          />
                    <Text style={styles.categoria}>Ação</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lancamentos.filter(item => { return item.idCategoria === 4 })}
                        keyExtractor={item => item.idLancamento}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />
                            </View>
                        )}
                    />
                    <Text style={styles.categoria}>Terror</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lancamentos.filter(item => { return item.idCategoria === 5 })}
                        keyExtractor={item => item.idLancamento}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
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
    img:
    {
        backgroundColor: '#000000',
        margin: 5,
        width: 200,
        height: 150,
    },
    categoria: 
    {
        fontSize: 30,
        fontStyle: "italic",
        backgroundColor: '#545cf0',
        textAlign: 'center',
    },  
});

export default Lancamentos;