import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Screen1 = ({ navigation }) => {
    const [textName, setName] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            {/* View image notebook */}
            <View style={styles.image}>
                <Image source={require('../assets/Image95.png')} style={styles.imageStyle} />
            </View>

            {/* View body */}
            <View style={styles.body}>
                <Text style={styles.titleHeader}>MANAGE YOUR TASK</Text>

                <View style={styles.inputContainer}>
                    <Image source={require('../assets/iconemail.png')} style={styles.icon} />
                    <TextInput
                        placeholder="Enter your name"
                        value={textName}
                        onChangeText={(text) => setName(text)}
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Screen2', { textName })}
                >
                    <Text style={styles.textButton}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    image: {
        flex: 4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        resizeMode: 'cover',
        width: '90%',
        height: 271,
    },
    body: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleHeader: {
        fontSize: 24,
        lineHeight: 36,
        color: '#8353E2',
        marginVertical: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 334,
        borderRadius: 10,
        marginBottom: 20,
    },
    icon: {
        width: 27,
        height: 27,
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
    button: {
        backgroundColor: '#00bbd6',
        height: 50,
        width: 190,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Screen1;
