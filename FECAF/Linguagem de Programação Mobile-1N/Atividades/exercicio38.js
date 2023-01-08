import * as React from 'react';
import {View, StyleSheet, Button } from 'react-native';

export default function App() {

const styles = StyleSheet.create({

  view_botao: {
  width: '30%',
  height: "min-content",
  margin: "3px",
  border: "1px solid #f3f3f3",
  }
});

  return (
    <View style={{flex: "1", flexDirection:"row", justifyContent: "right"}}>
      <View style={styles.view_botao}>
        <Button color="blue"  title="Botão C" />
      </View>
      <View style={styles.view_botao}>
        <Button color="green"  title="Botão B" />
      </View>
      <View style={styles.view_botao}>
        <Button color="red"  title="Botão A" />
      </View>
    </View>
  );
}