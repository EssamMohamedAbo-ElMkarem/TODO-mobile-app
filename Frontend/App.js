import Landing from "./screens/landing";
import LogIn from "./screens/login";
import SignUp from "./screens/signup";
import TodoList from "./screens/todolist";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Landing} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Todo" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
