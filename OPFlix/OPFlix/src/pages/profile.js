import React, {Component} from 'react';
import {Text, AsyncStorage, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import jwt from 'jwt-decode';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            FotoPerfil: "",
            Nome: "",
            tokenLocal: "",
        };
    }

    componentDidMount() {
        this._buscarDadosDoStorage();
        console.disableYellowBox = true;
    }

    _buscarDadosDoStorage = async () => {
        try {
            const tokenDoStorage = await AsyncStorage.getItem('@opflix:token');
            if (tokenDoStorage != null) {
                this.setState({ tokenLocal : tokenDoStorage})
            }
        } catch (error) {}
    };

    _retornarToken = async () => {
        let tokenDoStorage = await AsyncStorage.getItem('@opflix:token');
        this.setState({FotoPerfil: jwt(tokenDoStorage).foto})
        this.setState({Nome: jwt(tokenDoStorage).nome})
    }

    _logout = () => {
        AsyncStorage.removeItem('@opflix:token')
        this.props.navigation.navigate('Main Navigator')
    }

    render() {
        return(
            
        <View style={styles.Main}>   
            <Image source={{uri:this.state.FotoPerfil}} style={styles.foto}/>
            <Text style={styles.nome}>{this.state.Nome}</Text>
            <TouchableOpacity style={styles.logout}>
                <Text style={styles.sair} onPress={this._logout}>
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    Main: {
        display: "flex",
        flex: 1,
    },
    foto: {
        display: "flex",
        marginTop: 30,
        marginLeft: 108,
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "black",
    },
    nome: {
        fontSize: 25,
        display: "flex",
        textAlign: "center",
    },
    botaoSair: {
        height: 40,
        width: 100,
        marginTop: 150,
        marginLeft: 160,
        backgroundColor: "#A02BFF",
        borderRadius: 80,
    },
    sair: {
        fontSize: 25,
        color: "#fff",
        display: "flex",
        textAlign: "center",
    }
})

export default Profile;
