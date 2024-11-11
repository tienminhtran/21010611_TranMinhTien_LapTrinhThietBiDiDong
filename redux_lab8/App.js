import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskManagementScreen from "./screens/TaskManagementScreen";
import TaskScreen from "./screens/TaskScreen";
import { Text, TouchableOpacity } from "react-native";
import HeaderComponent from "./components/HeaderComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={({ navigation, route }) => ({
                        headerLeft: () => {
                            return (
                                <TouchableOpacity
                                    style={{ padding: 5 }}
                                    onPress={() => {
                                        navigation.goBack();
                                    }}
                                >
                                    <Text style={{ fontSize: 25 }}>&larr;</Text>
                                </TouchableOpacity>
                            );
                        },
                        headerRight: () => <HeaderComponent username={route.params?.username} />,
                        title: ""
                    })}
                >
                    <Stack.Screen name="TaskManagement" component={TaskManagementScreen} />
                    <Stack.Screen name="Task" component={TaskScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
