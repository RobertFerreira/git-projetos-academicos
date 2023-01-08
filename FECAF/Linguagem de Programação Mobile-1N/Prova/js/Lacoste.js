import React from 'react';
import { ScrollView, Text, View, StyleSheet, ImageBackground, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import lacoste from '/assets/lacoste.jpg';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container_secundario: {
  flex: 2,
  backgroundColor: 'white'
  },
  text_formulario: {
  fontFamily: 'arial',
  color: 'black',
  fontSize: '12pt',
  margin: '10px',
  padding: '10px',
  fontWeight: '700'
  },
  textInput_formulario: {
  fontSize: '11pt',
  textAlign: 'center',
  backgroundColor: '#006c21',
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
  color: 'black',
  fontSize: '14pt',
  fontWeight: '700'
  },
   textPequeno_lista: {
  color: '#006c21',
  fontSize: '10pt',
  fontWeight: '700',
  margin: '5px',
  }
});


const Formulario = () =>
    <ScrollView>
    <View style={styles.container_secundario}>
    <Text style={styles.text_formulario}> Cadastre a Peça Desejada: </Text>
    <TextInput style={styles.textInput_formulario} placeholder="Roupa, Calçado ou Acessório"/>
    <TextInput style={styles.textInput_formulario} placeholder="Tamanho"/>
    <TextInput style={styles.textInput_formulario} placeholder="Cor"/>


    <View style={styles.view_formulario_botao}>
    <Button color="black" title="Cadastrar" />
    </View>

    </View>
    </ScrollView>
  

const Lista = () =>

<ScrollView>
    <View style={styles.container_secundario}>
    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Casaco da Lacoste </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Tamanho: G </Text>
    <Text style={styles.textPequeno_lista}> Cor: Verde </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Boné da Lacoste </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Tamanho: Normal </Text>
    <Text style={styles.textPequeno_lista}> Cor: Branco </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Camiseta da Lacoste </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Tamanho: M </Text>
    <Text style={styles.textPequeno_lista}> Cor: Preta </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Suéter da Lacoste </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Tamanho: M </Text>
    <Text style={styles.textPequeno_lista}> Cor: Verde Escuro </Text>
    </View>
    </View>
</View>
</ScrollView>

const Principal = () => {
  return (
<NavigationContainer>

<ImageBackground source={lacoste} style={{flex: 1}}/>

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
