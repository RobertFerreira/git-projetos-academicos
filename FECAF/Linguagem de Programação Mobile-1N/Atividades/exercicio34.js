// Exercicio 34

/*Crie um projeto usando o EXPO CLI chamado matematica que mostre na tela a seguinte expressão e seu resultado:
4 * 8 / 2 = 16

**Desafio coloque as informações da expressão e do resultado em variáveis*/ 

import * as React from 'react';
import { Text, View, TextInput} from 'react-native';

export default function matematica() {

let n1 = 4;
let n2 = 8;
let n3 = 2;
let resultado = n1 * n2 / n3;

  return (
    <View>
      <Text> {n1} * {n2} / {n3} = {resultado} </Text>
    </View>
  );
}