import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab2 from './Lab2'; // Import Lab2

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Lab2" component={Lab2} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Pressable
        style={Styles.button}
        onPress={() => navigation.navigate('Lab2')} 
      >
        <Text style={Styles.buttonText}>Go to Lab 2</Text>
      </Pressable>
    </View>
  );
}
