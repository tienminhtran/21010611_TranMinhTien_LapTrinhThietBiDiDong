import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Styles from './assets/stylesheets/styles';

// Import Page1 and Page2 components
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';

function HomeScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Home Screen</Text>

      {/* Button for "Go to Page Yêu cầu của Thầy Tiến" */}
      <View style={Styles.section}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#ddd' : 'red', borderColor: '#ddd' },
            Styles.button,
          ]}
          onPress={() => navigation.navigate('Page2')}
        >
          <Text style={[Styles.buttonText, { color: 'yellow', fontWeight: 'bold' }]}>
            Go to Page Yêu cầu của Thầy Tiến
          </Text>
        </Pressable>
      </View>

      {/* Button for "Go to Page 1" */}
      <View style={Styles.section}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#ddd' : 'red', borderColor: '#ddd' },
            Styles.button,
          ]}
          onPress={() => navigation.navigate('Page1')}
        >
          <Text style={[Styles.buttonText, { color: '#fff', fontWeight: 'bold' }]}>
            Go to Page 1
          </Text>
        </Pressable>
      </View>

      {/* Button for "Go to Page 2" */}
      <View style={Styles.section}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#ddd' : 'red', borderColor: '#ddd' },
            Styles.button,
          ]}
          onPress={() => navigation.navigate('Page3')}
        >
          <Text style={[Styles.buttonText, { color: '#fff', fontWeight: 'bold' }]}>
            Go to Page 2
          </Text>
        </Pressable>
      </View>


    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />





        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
