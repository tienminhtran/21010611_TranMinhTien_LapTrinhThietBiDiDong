import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button} from 'react-native';

// chuyển trang cày thư viện
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import InfoList from './compoment/InfoList';


const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tren}>
        <Image source={require('./assets/Image 95.png')} style={styles.itemImage} />
      </View>
      <View style={styles.trungtam}>
        <Text style={{ fontSize: 24 }}>MANAGE YOUR TASK</Text>
        <View style={styles.trungtam_mail}>
          <Image source={require('./assets/mail.png')} />
          <TextInput style={styles.input} placeholder='Enter your email' />
        </View>
      </View>
      <View style={styles.duoi}>
        <Button
          title="Get Started ->"
          color="#F31111"
          onPress={() => navigation.navigate('InfoList')}
        />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InfoList" component={InfoList} />
        {/* muốn k có thanh home ở trên thì dùng   options = {{headerShown:false}}  */}
        {/*  <Stack.Screen name="ScreenAPI_02" component={ScreenAPI_02}  options = {{headerShown:false}} /> */}

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
  duoi:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: '271px',
    height: '271px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    // borderColor: 'gray',
    // borderWidth: 1,
    // bo góc
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trungtam_mail:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
        borderColor: 'gray',
    borderWidth: 1,
  }
});
