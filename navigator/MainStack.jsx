import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home"
import Leaderboard from "../pages/Leaderboard";
import Login from "../pages/Login";
<<<<<<< HEAD
import Register from "../pages/Register";
export default function MainStack(){
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator screenOptions={{headerShown : false }}>
            <Stack.Screen  name="home" component={Home}  />
=======
import History from "../pages/History";
import CyclingPage from "../pages/CyclingPage";
export default function MainStack(){
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator >
            <Stack.Screen  name="home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Cycling" component={CyclingPage} />
>>>>>>> b2aed12fb147ca27ea06eaa6d240f1775016f3e9
        </Stack.Navigator>
    )
    
}

