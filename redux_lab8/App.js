import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ReduxScreen from './redux';
import ReduxToolkitScreen from './reduxToolkitScreen';
const Stack = createStackNavigator();
function Home({navigation}){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Choose an Option</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Redux')}>
        <Text style={styles.buttonText}>REDUX</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Redux Toolkit')}>
        <Text style={styles.buttonText}>REDUX TOOL KIT</Text>
      </TouchableOpacity>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options = {{headerShown:true}}/>
        <Stack.Screen name="Redux" component={ReduxScreen} options = {{headerShown:true}}/>
        <Stack.Screen name="ReduxToolkitScreen" component={ReduxToolkitScreen} options = {{headerShown:true}}/>
        {/* <Stack.Screen name="Redux Toolkit" component={ReduxScreen} /> */}
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
