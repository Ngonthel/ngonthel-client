import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home"
import Leaderboard from "../pages/Leaderboard";
import Login from "../pages/Login";
import History from "../pages/History";
export default function MainStack(){
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator screenOptions={{headerShown : false }}>
            <Stack.Screen  name="home" component={Home}  />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="history" component={History} />
        </Stack.Navigator>
    )
    
}

