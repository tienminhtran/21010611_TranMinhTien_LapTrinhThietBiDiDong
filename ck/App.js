import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './redux/store';
import { Provider } from 'react-redux';
import Update from './components/Update';

// You can import supported modules from npm

// or any files within the Snack
import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';
import Screen03 from './components/Screen03';
import Dashboard from './components/DashboardBike'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen01">
          <Stack.Screen name="Screen01" component={Screen01} options={{headerShown:true}}/>
          <Stack.Screen name="Screen02" component={Screen02} options={{headerShown:true}}/>

                   {/* dieu huong quay lai */}

          <Stack.Screen name="Screen03" component={Screen03} options={{headerShown:true}}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:true}}/>
          <Stack.Screen name="Update" component={Update} options={{headerShown:true}}/>
          {/* <Stack.Screen name="XoaBike" component={XoaBike} options={{headerShown:true}}/> */}

        </Stack.Navigator >
      </NavigationContainer>
    </Provider>
    
  );
}

