import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button} from 'react-native';

export default function InfoList() {
  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.tren}>
          {/* <Image source={require('./assets/Image 95.png')} style={styles.itemImage} /> */}
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
  },
  tren:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trungtam:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
