import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import PhoneCall from './classes/WhatsAppCall';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState();
  
const onCallButtonClick = () => {
    console.log(phoneNumber)

    let call = new PhoneCall();
    call.make(phoneNumber);

  }


  return (
    <View style={styles.container}>
      
      <Text>Introduzca su numero de telefono:</Text>
      <TextInput style={styles.input}  
          value={phoneNumber} 
          autoCompleteType='tel' 
          keyboardType='phone-pad' 
          autoFocus={true}
          textContentType='telephoneNumber'
          onChangeText={(e) => setPhoneNumber(e)}
          ></TextInput>
      <Button title="Llamar" onPress={onCallButtonClick } ></Button>

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  },

});
