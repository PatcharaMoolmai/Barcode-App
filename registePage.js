import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';

export default class Register extends Component {
//   const [value, onChangeText] = React.useState('Useless Placeholder')
  render(){
        return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBg} source={require('./icon/wallpaper/brooke-lark-qdyBKWSzpSI-unsplash.jpg')}>
        <Text style={styles.logoText}>Logo</Text>
            <TextInput  
            placeholder="Email"
            styles={styles.textBox}
            onChangeText={text=>onChangeText(text)}
            // value={value}
            />
            <TextInput  
            placeholder="Username"
            styles={styles.textBox}
            onChangeText={text=>onChangeText(text)}
            // value={value}
            />
            <TextInput  
            placeholder="Password"
            styles={styles.textBox}
            onChangeText={text=>onChangeText(text)}
            // value={value}
            />
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={{ backgroundColor: 'lightblue' }}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Register</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ImageBackground>

    </View>
  );
  }

}