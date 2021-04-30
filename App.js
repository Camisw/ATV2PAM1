import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      endereco : ''
    }
  }

  componentDidMount(){
    axios
    .get('https://viacep.com.br/ws/06401135/json')
    .then(response => {

      console.log(response.data)

      this.setState({
        endereco : response.data
      })
    })
  };

  render(){
    return <View style={ styles.container }>
      <Text>CEP: {this.state.endereco.cep}</Text>
      <Text>Complemento: {this.state.endereco.complemento}</Text>
      <Text>Bairro: {this.state.endereco.bairro}</Text>
      <Text>Localidade: {this.state.endereco.localidade}</Text>
      <Text>UF: {this.state.endereco.uf}</Text>
      <Text>Logradouro: {this.state.endereco.logradouro}</Text>
      <Text>IBGE: {this.state.endereco.ibge}</Text>
      <Text>GIA: {this.state.endereco.gia}</Text>
      <Text>DDD: {this.state.endereco.ddd}</Text>
      <Text>SIAFI: {this.state.endereco.siafi}</Text>
    </View>
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

