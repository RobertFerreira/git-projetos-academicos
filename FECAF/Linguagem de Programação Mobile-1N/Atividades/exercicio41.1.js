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
    view_checklist: {
      marginTop: "20px",
    },
    input: {
      padding: "10px",
      borderBottom: "1px solid #cdcdcd"
    },
    view_botao: {
      marginTop: "40px",
      alignItems: "center",
    },
    view_rodape: {
      flexDirection: "row",
      marginTop: "50px"
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
          <View>
            <TextInput style={styles.input} placeholder={"Nome do Pet"} />
          </View>
        </View>
        <View style={styles.view_checklist}>
          <View>
            <TextInput style={styles.input} placeholder={"Raça"} />
          </View>
        </View>
        <View style={styles.view_checklist}>
          <View>
            <TextInput style={styles.input} placeholder={"Peso"} />
          </View>
        </View>
        <View style={styles.view_checklist}>
          <View>
            <TextInput style={styles.input} placeholder={"Nascimento"} />
          </View>
        </View>

        <View style={styles.view_botao}>
          <Button color="#2196f3" title="Cadastrar" />
        </View>

        <View style={styles.view_rodape}>
          <Text style={styles.text_rodape}> Cadastrar Pet </Text>
          <Text style={styles.text_rodape}> Listar </Text>
        </View>


      </View>
    </View>
  );
}