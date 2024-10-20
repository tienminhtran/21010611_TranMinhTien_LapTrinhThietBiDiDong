
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView,Image, TouchableOpacity, TextInput} from 'react-native';



export default function dangky() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const response = await fetch('https://67150c8133bc2bfe40b93603.mockapi.io/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        mail: email,
        password: password,
      }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      Alert.alert('Success', `User ${data.name} registered successfully!`);
      // navigation.navigate('NextScreen'); 
    } else {
      Alert.alert('Error', 'Failed to register');
    }
  };
  


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.img}>
        <Image source={require('../data/Image 19.png')}  />
        <Text style={{fontSize: 40, fontWeight:'bold'}}>Nice to see you!</Text>
        <Text style={{fontSize: 15}}>Create your account</Text>
    </View>
    <View style={styles.form}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',height: 50, width: '100%', borderColor: 'gray', borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10}}>
        <Image source={require('../data/codicon_account.png')} style={{tintColor: '#999',height: 20, width: 20 }}/>
        <TextInput style={{height: 50, width: '100%', color: 'gray'}} placeholder="Enter your username" 
                    value={username}
                    onChangeText={setUsername}
        
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',height: 50, width: '100%', borderColor: 'gray', borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10}}>
        <Image source={require('../data/Vector.png')} style={{tintColor: '#999',}} />
        <TextInput style={{height: 50, width: '100%',  color: 'gray'}} placeholder="Enter your email address" 
                    onChangeText={setEmail}
                    keyboardType="email-address"
        
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',height: 50, width: '100%', borderColor: 'gray', borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10}}>
        <Image source={require('../data/lock.png')} style={{tintColor: '#999',height: 20, width: 20 }}/>
        <TextInput style={{height: 50, width: '100%',  color: 'gray'}} placeholder="Enter your password" 
                    value={password}
                    onChangeText={setPassword}
        />
        <Image source={require('../data/eye.png')} style={{tintColor: '#999',height: 20, width: 20 }}/>

      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%',marginBottom: 20}}>
        <Text style={styles.label}>I agree to the terms and conditions</Text>

      </View>
      <View style={styles.btn}>
        <TouchableOpacity   style={{ backgroundColor: '#25C3D9', padding: 10, borderRadius: 10, height: 50,width:'100%',alignItems: 'center', justifyContent: 'center' }}  onPress={handleRegister} >  
          <Text style={{ color: 'white' }}>Continue</Text>
        </TouchableOpacity>
      </View>

    </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  img:{
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  form:{
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  btn:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  }

});
