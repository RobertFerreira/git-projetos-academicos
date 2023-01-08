import React from 'react';
import { ScrollView, Text, View, StyleSheet, ImageBackground, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import xbox from '/assets/xbox.jpg';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container_secundario: {
  flex: 2,
  backgroundColor: '#008c02'
  },
  text_formulario: {
  fontFamily: 'arial',
  color: 'white',
  fontSize: '12pt',
  margin: '10px',
  padding: '10px'
  },
  textInput_formulario: {
  fontSize: '11pt',
  textAlign: 'center',
  backgroundColor: 'white',
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
  color: 'white',
  fontSize: '14pt',
  },
   textPequeno_lista: {
  color: 'black',
  fontWeight: '700',
  fontSize: '10pt',
  margin: '5px',
  }
});


const Formulario = () =>
    <ScrollView>
    <View style={styles.container_secundario}>
    <Text style={styles.text_formulario}> Qual jogo deseja jogar futuramente? </Text>
    <TextInput style={styles.textInput_formulario} placeholder="Nome do Jogo"/>
    <TextInput style={styles.textInput_formulario} placeholder="Gênero do Jogo"/>


    <View style={styles.view_formulario_botao}>
    <Button color="black" title="Adicionar em sua Lista" />
    </View>

    </View>
    </ScrollView>
  

const Lista = () =>

<ScrollView>
    <View style={styles.container_secundario}>
    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Forza Horizon </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Gênero: Corrida </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Gears of War </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Gênero: Ação, Aventura </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Halo </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Gênero: Ficção Cientifica </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Sea of Thieves </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Gênero: Aventura </Text>
    </View>
    </View>
</View>
</ScrollView>

const Principal = () => {
  return (
<NavigationContainer>

<ImageBackground source={xbox} style={{flex: 1}}/>

<View style={{flex: 2}}>
          <Tab.Navigator>
            <Tab.Screen name="Formulario" component={Formulario}/>
            <Tab.Screen name="Lista" component={Lista}/>
          </Tab.Navigator>
        </View>

</NavigationContainer>
  );
}

export default Principal;
