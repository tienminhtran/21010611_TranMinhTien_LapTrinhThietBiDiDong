import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homee from './Home';
import ListProduct from './ListProduct';
import ProductDetail from './ProductDetail';
import AddBike from './AddBike.js';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* chuyển trang HOME */}
<Stack.Screen
  name="Home"
  component={Homee}
  options={{ headerShown: true, title: 'Home' }}
/>
        {/* chuyển trang LIST */}
        <Stack.Screen name="List" component={ListProduct}   options={{ headerShown: true, title: 'Home' }}
 />

        {/* chuyển trang DETAIL */}
        <Stack.Screen name="Detail" component={ProductDetail} />

        {/* chuyển trang ADD */}
        <Stack.Screen name="AddBike" component={AddBike} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}