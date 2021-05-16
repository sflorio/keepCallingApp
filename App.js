import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [phoneNumber, setstate] = useState();
  
  return (
    <View style={styles.container}>
      <Text>Introduzca su numero de telefono</Text>
      <TextInput value={phoneNumber} ></TextInput>
      <Button title="Llamar" onPress={() => console.log(phoneNumber) } ></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
