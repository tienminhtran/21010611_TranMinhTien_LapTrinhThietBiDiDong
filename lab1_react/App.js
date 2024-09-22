import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppPage1 from './App1';
import AppPage2 from './App2';
import AppPage3 from './App3';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppPage1">
        <Stack.Screen name="AppPage1" component={AppPage1} />
        {/* <Stack.Screen name="AppPage2" component={AppPage2} /> */}
        {/* <Stack.Screen name="AppPage3" component={AppPage3} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
