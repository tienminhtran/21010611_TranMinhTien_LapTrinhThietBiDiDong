import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image, TextInput,FlatList, TouchableOpacity } from 'react-native';
import React,{useEffect, useState} from 'react';

const ScreenAPI_01 = ({navigation,route}) => {
    const [textName, setName] = useState('')
    return (
        <SafeAreaView style={styles.container}>
           {/* View image note book */}
           <View style={styles.image}>
                <Image source={require('../assets/Image 95.png')} style = {{resizeMode:'cover', width: '100%', height: 271}}/>
           </View>

           {/* View body */}
           <View style={styles.body}>
                <Text style={styles.titleHeader}>MANAGE YOURTASK</Text>
                <View style={{flex:2}}>
                    <View style={styles.inputEmail}>
                        <Image source={require('../assets/iconemail.png')} style = {{resizeMode:'cover', width: 27, height: 27, marginHorizontal:10}}/>
                        <TextInput placeholder="Enter your name" value={textName} onChangeText={(text) => setName(text)}/>
                    </View>
                </View>

                <View style={{flex:2}}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate({name:'ScreenAPI_02', params: {textName: textName}})}>
                        <Text style={styles.textButton}>GET STARTED -> </Text>
                    </TouchableOpacity>
                </View>

           </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:40  
    },
    image:{
      flex:4,
      width: 271,
      height: 271,
      margin:40
    },
    body: {
        flex:6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleHeader:{
        flex:2,
        fontSize: 24,
        lineHeight: 36,
        color: '#8353E2'
    },
    inputEmail:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:1,
        paddingVertical:10,
    
        width:334,
        borderRadius:10,
    },
    button: {
        backgroundColor: '#00bbd6',
        height: 50,
        width: 190,
        borderRadius: 10,
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 50,
    }

});

export default ScreenAPI_01;