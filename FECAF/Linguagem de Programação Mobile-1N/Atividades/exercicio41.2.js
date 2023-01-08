import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import imagem from './assets/tasklist.png';
import imagem_pets from './assets/pets.png';
import check from './assets/Check.png';
import pendente from './assets/Circle.png';


export default function App() {

  const styles = StyleSheet.create({
    image_background: {
      width: "100%",
      height: "100%",
      justifyContent: "top",
    },
    image_background_text_grande: {
      backgroundColor: "#00000042",
      color: "orange",
      textShadow: "-0px 1px white",
      fontSize: "33px",
      fontWeight: "400",
      textAlign: "center"
    },
    view_colum: {
      flexDirection: "column",
      padding: "10px",
      paddingTop: "40px",
      paddingBottom: "40px",
      borderTop: "2px solid #cdcdcd",
      borderBottom: "2px solid #cdcdcd"
    },
    text_grande: {

    },
    text_pequeno: {
      fontSize: "10pt",
      color: "#707070"
    },
    view_rodape: {
      flexDirection: "row"
    },
    text_rodape: {
      width: "50%",
      backgroundColor: "lightblue",
      padding: "10px",
      textAlign: "center",
      textDecorationLine: "underline"
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: "100%", height: "215px" }}>
        <ImageBackground source={imagem_pets} style={styles.image_background}>
          <Text style={styles.image_background_text_grande}> PETS </Text>
        </ImageBackground>
      </View>

      <View>
        <View style={styles.view_checklist}>


          <View style={styles.view_colum}>
            <Text style={styles.text_grande}> Mike </Text>
            <Text style={styles.text_pequeno}> Vira Lata-11,4 Kilos-25/01/2014 </Text>
          </View>
          <View style={styles.view_colum}>
            <Text style={styles.text_grande}> Princesa </Text>
            <Text style={styles.text_pequeno}> Poodle-7,3 Kilos-10/06/2018 </Text>
          </View>
          <View style={styles.view_colum}>
            <Text style={styles.text_grande}> Rex </Text>
            <Text style={styles.text_pequeno}> Pastor Alemão-24,6 Kilos-05/04/2017 </Text>
          </View>
          <View style={styles.view_colum}>
            <Text style={styles.text_grande}> Totó </Text>
            <Text style={styles.text_pequeno}> Bulldog-12,7 Kilos-10/05/2015 </Text>
          </View>

        </View>

        <View style={styles.view_rodape}>
          <Text style={styles.text_rodape}> Cadastrar Pet </Text>
          <Text style={styles.text_rodape}> Listar </Text>
        </View>


      </View>
    </View>
  );
}