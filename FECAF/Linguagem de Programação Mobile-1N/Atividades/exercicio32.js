// Exercicio 32

/*Crie um projeto usando o EXPO CLI na sua maquina chamado meusdados para mostrar no dispositivo os seguintes dados:
Faculdade Fecaf
Analise e Desenvolvimento de Sistemas
RA - Nome
Meu primero programa React - Native*/ 

import * as React from 'react';
import { Text, View} from 'react-native';

export default function meusdados() {
  return (
    <View>
      <Text> Faculdade Fecaf </Text>
      <Text> Analise e Desenvolvimento de Sistemas </Text>
      <Text> RA: 33537 - Nome: Robert Welis Ferreira da Silva </Text>
      <Text> Meu primero programa React - Native </Text>
    </View>
  );
}