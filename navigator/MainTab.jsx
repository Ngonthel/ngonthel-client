import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStack from "./MainStack";
import Leaderboard from "../pages/Leaderboard";
import Profile from '../pages/Profile'
import { MaterialIcons, Ionicons , MaterialCommunityIcons } from "@expo/vector-icons";

export default function MainTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 18,
        },
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="home"
        component={MainStack}
        options={{
          title: "Home",
          tabBarLabelStyle : {color : '#293038' , fontSize : 18 , paddingVertical : 2},
          tabBarIcon: ({ color , focused }) => (
            <Ionicons
              name="home-outline"
              size={25}
              color={focused ? "#FFC329" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="leaderboard"
        component={Leaderboard}
        options={{
            title: "Leaderboard",
            tabBarLabelStyle : {color : '#293038' , fontSize : 18 , paddingVertical : 2},
            tabBarIcon: ({ color , focused }) => (
              <MaterialCommunityIcons
                name="podium"
                size={25}
                color={focused ? "#FFC329" : "gray"}
              />
            ),
          }}
      />
       <Tab.Screen
        name="profile"
        component={Profile}
        options={{
            title: "Profile",
            tabBarLabelStyle : {color : '#293038' , fontSize : 18 , paddingVertical : 2},
            tabBarIcon: ({ color , focused }) => (
              <Ionicons
                name="person-outline"
                size={25}
                color={focused ? "#FFC329" : "gray"}
              />
            ),
          }}
      />
    </Tab.Navigator>
  );
}
