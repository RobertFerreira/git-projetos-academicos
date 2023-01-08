import React from 'react';
import { ScrollView, Text, View, StyleSheet, ImageBackground, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import petz from '/assets/petz.jpg';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container_secundario: {
  flex: 2,
  backgroundColor: '#facc04'
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
  color: 'black',
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
    <Text style={styles.text_formulario}> Cadastre seu Pet: </Text>
    <TextInput style={styles.textInput_formulario} placeholder="Nome"/>
    <TextInput style={styles.textInput_formulario} placeholder="Raça"/>
    <TextInput style={styles.textInput_formulario} placeholder="Porte"/>


    <View style={styles.view_formulario_botao}>
    <Button color="#00A0E4" title="Cadastrar" />
    </View>

    </View>
    </ScrollView>
  

const Lista = () =>

<ScrollView>
    <View style={styles.container_secundario}>
    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Bruce Wayne </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Raça: Maltês </Text>
    <Text style={styles.textPequeno_lista}> Porte: Pequeno </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Robson </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Raça: Pastor Alemão </Text>
    <Text style={styles.textPequeno_lista}> Porte: Grande </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Bob </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Raça: Pug </Text>
    <Text style={styles.textPequeno_lista}> Porte: Pequeno </Text>
    </View>
    </View>

    <View style={styles.view_lista}>
    <Text style={styles.textGrande_lista}> Thor </Text>
    <View style={styles.view_sublista}>
    <Text style={styles.textPequeno_lista}> Raça: Husby Siberiano </Text>
    <Text style={styles.textPequeno_lista}> Porte: Grande </Text>
    </View>
    </View>
</View>
</ScrollView>

const Principal = () => {
  return (
<NavigationContainer>

<ImageBackground source={petz} style={{flex: 1}}/>

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
