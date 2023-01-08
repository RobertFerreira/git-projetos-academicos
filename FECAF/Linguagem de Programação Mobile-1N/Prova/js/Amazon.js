import React from 'react';
import { ScrollView, Text, View, StyleSheet, ImageBackground, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import amazon from '/assets/amazon.jpg';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container_secundario: {
  flex: 2,
  backgroundColor: '#d2d2d2'
  },
  text_formulario: {
  fontFamily: 'arial',
  color: '#d16806',
  fontSize: '12pt',
  margin: '10px',
  padding: '10px',
  fontWeight: '700'
  },
  textInput_formulario: {
  fontSize: '11pt',
  textAlign: 'center',
  backgroundColor: 'black',
  color: 'white',
  margin: '20px',
  marginTop: '10px',
  padding: '9px',
  borderRadius: '20px'
  },
  view_formulario_botao: {
  alignItems: 'center',
  margin: '10px',
  },
    view_lista: {
  marginTop: '10px',  
  padding: '7px',
  flexDirection: 'column'
  },
  view_sublista: {
  flex: 1,
  flexDirection: 'row',
  },
  textGrande_lista: {
  fontFamily: 'arial',
  color: '#d16806',
  fontSize: '14pt',
  fontWeight: '700'
  },
   textPequeno_lista: {
  color: 'black',
  fontSize: '10pt',
  margin: '5px',
  }
});


const Formulario = () =>
    <ScrollView>
    <View style={styles.container_secundario}>
    <Text style={styles.text_formulario}> Cadastre seu produto: </Text>
    <TextInput style={styles.textInput_formulario} placeholder="Nome do Produto"/>
    <TextInput style={styles.textInput_formulario} placeholder="Preço"/>
    <TextInput style={styles.textInput_formulario} placeholder="Estoque"/>


    <View style={styles.view_formulario_botao}>
    <Button color="#d16806" title="Cadastrar" />
    </View>

    </View>
    </ScrollView>
  

const Lista = () =>

<ScrollView>
    <View style={styles.container_secundario}>
    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Caixa de Som </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Preço: R$ 169,90 </Text>
    <Text style={styles.textPequeno_lista}> Estoque: 453 </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Impressora Multifuncional </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Preço: R$ 1.249,00 </Text>
    <Text style={styles.textPequeno_lista}> Estoque: 100 </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Carregador de Celular </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Preço: R$25,00 </Text>
    <Text style={styles.textPequeno_lista}> Estoque: 987 </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Mouse sem fio </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Preço: R$58,90 </Text>
    <Text style={styles.textPequeno_lista}> Estoque: 234 </Text>
    </View>
    </View>
</View>
</ScrollView>

const Principal = () => {
  return (
<NavigationContainer>

<ImageBackground source={amazon} style={{flex: 1}}/>

<View style={{flex: 2}}>
          <Tab.Navigator>
            <Tab.Screen tabBarLabel='teste' name="Formulario" component={Formulario}/>
            <Tab.Screen name="Lista" component={Lista}/>
          </Tab.Navigator>
        </View>

</NavigationContainer>
  );
}

export default Principal;
