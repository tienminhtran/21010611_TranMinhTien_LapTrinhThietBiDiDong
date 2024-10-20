import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';



export default function dangnhap({navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://67150c8133bc2bfe40b93603.mockapi.io/user')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error)); // Corrected error handling
    }, []);

    const handleLogin = () => {
        const user = users.find(user => 
            user.mail.toLowerCase().trim() === email.toLowerCase().trim() && 
            user.password === password.trim()
        );

        if (user) {
            alert('Login successfully');
            // chuyển sang
            // product.js

            navigation.navigate('product'); 
        } else {
            alert('Login failed');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.img}>
                <Image source={require('../data/Image 20.png')} />
                <Text style={{fontSize: 40, fontWeight:'bold', alignSelf: 'flex-start'}}>Welcome</Text>
            </View>

            <View style={styles.form}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, alignSelf: 'flex-start' }}>Email</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',height: 50, width: '100%', borderColor: 'gray', borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10}}>
                    <Image source={require('../data/Vector.png')} style={{tintColor: '#999',}} />
                    <TextInput
                        style={[styles.input, { flex: 1 }]} 
                        placeholder="Enter your email address"
                        placeholderTextColor="#999"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                </View>
            </View>

            <View style={styles.form}>
                <Text style={{fontSize: 20, fontWeight:'bold', alignSelf: 'flex-start'}}>Password</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',height: 50, width: '100%', borderColor: 'gray', borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10}}>
                    <Image source={require('../data/lock.png')} style={{tintColor: '#999',height: 20, width: 20 }}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                    <Image source={require('../data/eye.png')} style={{tintColor: '#999',height: 20, width: 20 }}/>
                </View>
            </View>

            <View style={styles.btn}>
                <TouchableOpacity style={{ backgroundColor: '#25C3D9', padding: 10, borderRadius: 10, height: 50,width:'100%',alignItems: 'center', justifyContent: 'center' }} onPress={handleLogin}>  
                    <Text style={{ color: 'white' }}>Continue</Text>
                </TouchableOpacity>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    btn:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    input: {
        height: 50,
        width: '100%',
        color: 'gray'
    }
});