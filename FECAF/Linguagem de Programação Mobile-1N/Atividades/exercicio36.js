// Exercicio 36

/*Crie um formulário para cadastrar uma pizza conforme o layout em anexo.
Desafios:
Deixar o objeto com os dados de estilos em um arquivo separado, que será importado posteriormente 
Criar um componente para exibir o label e o textinput em um módulo separado que possa ser importado pelo módulo principal
Reutilize o componente criado, passando o texto a ser mostrado na tela como atributo da tag do componente*/

import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function pizza() {

const styles = StyleSheet.create({
  view_pizza: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:'1px',
  margin: '10px'
  },
  text_pizza: {
  fontSize: '9pt',  
  width: '30%',
  padding: '5px',
  },
  textinput_pizza: {
  width: '70%',
  padding: '5px',
  borderColor: '#B7B7B7',
  borderWidth: 1
  },
});

  return (

<View>
    <View style={styles.view_pizza}>
      <Text style={styles.text_pizza} >  Cliente </Text>
      <TextInput style={styles.textinput_pizza} />
    </View>

    <View style={styles.view_pizza}>
      <Text style={styles.text_pizza} >  Sabor </Text>
      <TextInput style={styles.textinput_pizza} />
    </View>

    <View style={styles.view_pizza}>
      <Text style={styles.text_pizza} >  Tamanho </Text>
      <TextInput style={styles.textinput_pizza} />
    </View>

    <View style={styles.view_pizza}>
      <Text style={styles.text_pizza} >  Quantidade </Text>
      <TextInput style={styles.textinput_pizza} />
    </View>

    <View style={styles.view_pizza}>
    <Button color="#6200EE"  title="Gravar" />
    </View>

</View>
  );
}


