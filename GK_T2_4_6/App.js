import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './component/Screen'; 

const data = [
  { mail: '2', ps: '2' },
  { mail: 'john@gmail.com', ps: '12345678' },
  { mail: 'jeny@gmail.com', ps: '12345678' },
  { mail: 'abc@gmail.com', ps: '12345678' },
  { mail: '1', ps: '1' },
  { mail: '', ps: '' },
];

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // console.log('Email:', email);
    // console.log('Password:', password);

    const user = data.find(user => user.mail === email && user.ps === password);
    // console.log('User:', user);
    if (user) {
      console.log('Login successful.');
      navigation.navigate('Screen');
    
    } else {
      console.log('Incorrect email or password.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
        <Image source={require('./Data/icon.png')} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello Again!</Text>
        <Text style={{ fontSize: 10 }}>Log into your account</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.TextInput}>
          <Image source={require('./Data/Vector.png')} />
          <TextInput
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            // keyboardType="email-address"
            // autoCapitalize="none"
            style={{ marginLeft: 10, flex: 1, height: 40 }}
          />
        </View>

        <View style={styles.TextInput}>
          <Image source={require('./Data/lock.png')} />
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            // secureTextEntry
            style={{ marginLeft: 10, flex: 1, height: 40 }}
          />
          <Image source={require('./Data/eye.png')} />
        </View>

        <View style={{ alignItems: 'flex-end', padding: 20 }}>
          <Text style={{ fontSize: 10 }}>Forgot your password?</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.chantrang}>
        <Text>Or</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <Image source={require('./Data/face.png')} />
          <Image source={require('./Data/google.png')} />
          <Image source={require('./Data/apple.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 2,
    width: '80%',
  },
  TextInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  chantrang: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#00BDD6',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
