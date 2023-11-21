import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailEvent from "../pages/DetailEvent";
import Event from "../pages/Event"
import MapV3 from "../pages/CreateEvent";

export default function EventStack(){
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator >
            <Stack.Screen name="Event" component={Event} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailEvent} options={{ headerShown: true }} />
            <Stack.Screen name="Create Event" component={MapV3} options={{ headerShown: true }} />
       
        </Stack.Navigator>
    )
    
}

