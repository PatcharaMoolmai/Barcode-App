import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Logo</Text>
      <Text>Username</Text>
      <Text>Password</Text>
      {/* <TextInput  
        placeholder="Username"
        styles={{height :40, borderColor: "gray", borderWidth:1 }}
        onChangeText={text=>onChangeText(text)}
        value={value}></TextInput> */}
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
