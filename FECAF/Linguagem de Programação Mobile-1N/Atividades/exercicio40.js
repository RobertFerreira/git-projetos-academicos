import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';
import imagem from './assets/tasklist.png';
import olho from './assets/Eye.png';
import check from './assets/Check.png';
import pendente from './assets/Circle.png';


export default function App() {

const styles = StyleSheet.create({
  image_background:{
  width: "100%",
  flex:1,
  justifyContent: "center",
  alignItems:"stretch"
  },
  image_background_text_grande:{
  textAlign: "center",
  backgroundColor:"#00000042",
  color: "white",
  fontSize: "40px",
  marginEnd: "20px",
  marginStart: "20px"
  },
  image_background_text_pequeno:{
  textAlign: "center",
  backgroundColor:"#00000042",
  color: "white",
  fontSize: "15px",
  marginEnd: "20px",
  marginStart: "20px",
  marginTop:"15px"
  },
  view_colum:{
   flexDirection: "column" 
  },
  view_checklist: {
 flexDirection: "row",
 marginTop: "5px",
 padding:"10px",
 borderBottom: "1px solid #d3d3d3"
  },
  text_grande: {
  textDecoration: "line-through"
  },
 text_pequeno: {
 fontSize:"8pt",
 color:"#707070"
  },
  image_check: {
  width: "25px",
  height:"25px",
  margin: "3px"
  },
  image_olho: {
  width:"25px",
  height: "17px",
  marginStart: "85%",
  marginBottom: "10%"
  }
});

  return (
    <View>
     <View style={{height: "37%"}}>
     <ImageBackground source={imagem} style={styles.image_background}>
     <Image source={olho} style={styles.image_olho}/>
     <Text style={styles.image_background_text_grande}> Hoje </Text>
     <Text style={styles.image_background_text_pequeno}> qua, 20 de maio </Text>
     </ImageBackground>
     </View>

     <View style={{height: "60%"}}>
     <View style={styles.view_checklist}>
     <Image source={check} style={styles.image_check}/>
     <View style={styles.view_colum}>
     <Text style={styles.text_grande}> Assistir Aulas na Faculdade </Text>
     <Text style={styles.text_pequeno}> qua, 20 de maio </Text>
     </View>
     </View>
     <View style={styles.view_checklist}>
      <Image source={pendente} style={styles.image_check}/>
     <View style={styles.view_colum}>
     <Text> Estudar React-Native</Text>
     <Text style={styles.text_pequeno}> qua, 20 de maio </Text>
     </View>
     </View>
     <View style={styles.view_checklist}>
      <Image source={check} style={styles.image_check}/>
     <View style={styles.view_colum}>
     <Text style={styles.text_grande}> Fazer Atividades de Casa </Text>
     <Text style={styles.text_pequeno}> qua, 20 de maio </Text>
     </View>
     </View>
     <View style={styles.view_checklist}>
      <Image source={check} style={styles.image_check}/>
     <View style={styles.view_colum}>
     <Text style={styles.text_grande}> Mandar E-mail para o Chefe </Text>
     <Text style={styles.text_pequeno}> qua, 20 de maio </Text>
     </View>
     </View>
     <View style={styles.view_checklist}>
      <Image source={check} style={styles.image_check}/>
     <View style={styles.view_colum}>
     <Text style={styles.text_grande}> Preparar um almoço </Text>
     <Text style={styles.text_pequeno}> qua, 20 de maio </Text>
     </View>
     </View>
     </View>
    </View>
  );
}