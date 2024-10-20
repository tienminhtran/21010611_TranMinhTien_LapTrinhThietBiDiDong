import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import dangky from './component/dangky';
import dangnhap from './component/dangnhap';
import product from './component/product';
import info from './component/info';

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
        <Image source={require('./data/Container 17.png')}  />
      </View>
      <View style={styles.text}>
        <Text style={{fontSize:30, fontWeight:'bold', alignSelf: 'flex-start'}}>Boost Productivity</Text>
        <Text style={{alignSelf: 'flex-start'}}>Simplity tasks, boost productivity</Text>
      </View> 
      <View style={styles.btn}>
        {/* Navigate to the Sign up screen */}
        <TouchableOpacity   style={{ backgroundColor: '#25C3D9', padding: 10, borderRadius: 10, height: 50, alignItems: 'center', justifyContent: 'center' }}  onPress={() => navigation.navigate('dangky')} >  
          <Text style={{ color: 'white' }}>Sign up</Text>
        </TouchableOpacity>
        {/* Add Login functionality here if needed */}
        <TouchableOpacity style={{ backgroundColor: '#F9FAFB', padding: 10, borderRadius: 10, height: 50, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate('dangnhap')}> 
          <Text style={{ color: 'gray' }}>Login</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="dangky" component={dangky} />
        <Stack.Screen name="dangnhap" component={dangnhap}   />
        <Stack.Screen name="product" component={product} />
        <Stack.Screen name="info" component={info} />
      </Stack.Navigator>
    </NavigationContainer>
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
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',

  },
  text:{
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  btn:{
    flex: 2,
  
    width: '90%',

  }

});
