import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, ImageBackground } from 'react-native';
import Styles from './styles/Styles';
import React from 'react';


export default function App() {
  const background = require ("./assets/background.jpeg");

let [username, setUsername] = React.useState=("");
let [password, setPassword] = React.useState=("");

  return (
    <ImageBackground style={Styles.container} source={background}>
      <View style={Styles.backgroundCover}>
        <Text style={[Styles.lightText,Styles.header]}>Welcome to Legends ToDo app!</Text>
      <TextInput style={[Styles.textInput, Styles.lightText, Styles.lightTextInput]} 
      placeholder='Username'
      placeholderTextColor='white'
      value={username}
      onChangeText={setUsername}
      />
      <TextInput style={[Styles.textInput, Styles.lightText, Styles.lightTextInput]} 
      placeholder='Password' 
      placeholderTextColor='white'
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}

      />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}


