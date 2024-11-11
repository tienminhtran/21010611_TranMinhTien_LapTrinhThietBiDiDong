import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from './ScreenHome';
import ScreenListProduct from './ScreenListProduct';
import ScreenProductDetail from './ScreenProductDetail';
import ScreenAddBike from './ScreenAddBike';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* chuyển trang HOME */}
        <Stack.Screen name="Home" component={ScreenHome} />

        {/* chuyển trang LIST */}
        <Stack.Screen name="List" component={ScreenListProduct} />

        {/* chuyển trang DETAIL */}
        <Stack.Screen name="Detail" component={ScreenProductDetail} />

        {/* chuyển trang ADD */}
        <Stack.Screen name="AddBike" component={ScreenAddBike} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}