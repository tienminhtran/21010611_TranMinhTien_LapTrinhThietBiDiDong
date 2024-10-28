import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './component/Screen1';
import Screen2 from './component/Screen2';
import Screen3 from './component/Screen3';

// Tạo Stack Navigator
const Stack = createNativeStackNavigator();

// Component chính của ứng dụng
export default function App() {
  return (
    // Container điều hướng chính của ứng dụng
    <NavigationContainer>
      {/* Cấu hình Stack Navigator */}
      <Stack.Navigator initialRouteName="Screen1">
        {/* Định nghĩa các màn hình trong Stack */}
        <Stack.Screen name="Screen1" component={Screen1} options = {{headerShown:false}} /> {/* Màn hình đầu tiên */}
        <Stack.Screen name="Screen2" component={Screen2}  options = {{headerShown:false}} /> {/* Màn hình thứ hai */}
        <Stack.Screen name="Screen3" component={Screen3}  options = {{headerShown:false}} /> {/* Màn hình thứ ba */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Định nghĩa các kiểu cho ứng dụng
const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ chiều cao
    backgroundColor: '#fff', // Màu nền trắng
    alignItems: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
  },
});
