import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home"
import Leaderboard from "../pages/Leaderboard";
import Login from "../pages/Login";
export default function MainStack(){
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator screenOptions={{headerShown : false }}>
            <Stack.Screen  name="home" component={Home}  />
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
    )
    
}

