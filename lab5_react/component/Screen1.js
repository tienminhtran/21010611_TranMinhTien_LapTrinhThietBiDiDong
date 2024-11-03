import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Screen1 = ({ navigation, route }) => {
    const [textName, setName] = useState('');

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
        }}>
            {/* Hình ảnh tiêu đề */}
            <View style={{
                flex: 4,
                width: 271,
                height: 271,
                margin: 40,
            }}>
                <Image
                    source={require('../assets/Image 95.png')}
                    style={{
                        resizeMode: 'cover',
                        width: '100%',
                        height: 271,
                    }}
                />
            </View>

            {/* Nội dung chính */}
            <View style={{
                flex: 6,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontSize: 24,
                    lineHeight: 36,
                    color: '#8353E2',
                    marginBottom: 20,
                }}>
                    MANAGE YOUR TASK
                </Text>

                {/* Ô nhập tên người dùng */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    width: 334,
                    borderRadius: 10,
                    marginBottom: 20,
                }}>
                    <Image
                        source={require('../assets/iconemail.png')}
                        style={{
                            resizeMode: 'cover',
                            width: 27,
                            height: 27,
                            marginHorizontal: 10,
                        }}
                    />
                    <TextInput
                        placeholder="Enter your name"
                        value={textName}
                        onChangeText={(text) => setName(text)}
                        style={{
                            flex: 1,
                        }}
                    />
                </View>

                {/* Nút chuyển màn hình */}
                <TouchableOpacity
                    style={{
                        backgroundColor: '#00bbd6',
                        height: 50,
                        width: 190,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.navigate('Screen2', { textName })}
                >
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>
                        GET STARTED →
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Screen1;
