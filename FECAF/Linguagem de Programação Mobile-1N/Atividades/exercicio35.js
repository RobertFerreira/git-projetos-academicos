// Exercicio 35

/*Crie uma aplicativo React Native com um formulário para cadastrar Pets conforme o layout em anexo.*/

import * as React from 'react';
import { Text, View, TextInput} from 'react-native';

export default function meusdados() {

  return (

    <View>
      <TextInput style={{marginTop:30, padding: 10, borderBottomColor: '#B7B7B7',borderBottomWidth: 1}}  
        placeholder={"Nome do Pet"} />
      <TextInput style={{marginTop:30, padding: 10, borderBottomColor: '#B7B7B7',borderBottomWidth: 1}}
        placeholder={"Raça"} />
      <TextInput style={{marginTop:30, padding: 10, borderBottomColor: '#B7B7B7',borderBottomWidth: 1}}  
        placeholder={"Peso"} />
      <TextInput style={{marginTop:30, padding: 10, borderBottomColor: '#B7B7B7',borderBottomWidth: 1}}  
        placeholder={"Nascimento"} />
    </View>
  );
}


