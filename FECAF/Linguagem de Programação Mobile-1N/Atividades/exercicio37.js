import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={{flexDirection:'row', border: '1px solid #d3d3d3', width: '300px'}}>
        <View style={{
                  backgroundColor:'green',
                  height: '200px',
                  width: '100px',
                  }}>
                  <Text> </Text>
      </View>
        <View style={{flexDirection: 'row',
                  backgroundColor:'white',
                  height: '200px',
                  width: '100px'
                  }}>
      </View>
        <View style={{flexDirection: 'row',
                  backgroundColor:'red',
                  height: '200px',
                  width: '100px'
                  }}>
      </View>
    </View>
      
  );
}

