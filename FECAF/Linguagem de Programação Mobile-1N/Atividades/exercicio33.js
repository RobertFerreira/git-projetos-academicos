// Exercicio 33

/*Crie um projeto usando o EXPO CLI chamado resumo, o qual deve mostrar no dispositvo um resumo de 5 linhas do conteúdo que foi mostrado na aula do dia 26/04 em um TextInput*/ 

import * as React from 'react';
import { Text, View, TextInput} from 'react-native';

export default function meusdados() {

  return (

    <View>
      <TextInput style={{padding: 10, width: "310px", height: "120px", borderColor: '#000000',borderWidth: 1}}                   multiline={true}
                 numberOfLines={5}
        value={"Em nossa última aula, aprendemos um pouco mais sobre Reactive Native, utilizando do site snack.expo.dev para realizar a programaçãos de nossos códigos, criando um pequeno formulário contendo Nome e RA do aluno."}
      />
    </View>
  );
}


