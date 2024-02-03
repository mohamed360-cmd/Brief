import { View, StyleSheet } from "react-native";
import HomeScreen from "./Screens/Home Screen/HomeScreenMain";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreenMain from "./Screens/Explore Screen/ExploreScreenMain";
import ChatMainScreen from "./Screens/Chat Screen/ChatMainScreen";
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import PodcastMainScreen from "./Screens/Podcast Screen/PodcastMainScreen";
import { useState } from "react";
import AuthMain from "./Screens/Auth Screen/AuthMain";
export default function App() {
  const Tab = createBottomTabNavigator()
  const [isLoggedin,setIsLoggedIn] = useState(false)
  const [showLoginScreen,setShowLoginScreen] = useState(true)
  return (<>

      {
        showLoginScreen &&  <AuthMain setShowLoginScreen={setShowLoginScreen} setIsLoggedIn={setIsLoggedIn}/>
      }
      {

     !showLoginScreen && 
    <NavigationContainer style={styles.MainContainer}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconsName;
            if (route.name == "Home") {
              iconsName = focused ? "home" : "home-outline"
              return <Ionicons name={iconsName} size={size} color={color} />
            } else if (route.name == "Explore") {
              iconsName = focused ? "explore" : "explore"
              return <MaterialIcons name={iconsName} size={size} color={color} />
            } else if (route.name == "PodCast") {
              iconsName = focused ? "podcast" : "podcast"
              return <FontAwesome name={iconsName} size={size} color={color} />
            } else if (route.name == "Chats") {
              iconsName = focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"
              return <Ionicons name={iconsName} size={size} color={color} />
            }
          },
          tabBarActiveTintColor : 'blue',
          tabBarInactiveTintColor :'grey',
          headerShown :false
        })}
      >
        <Tab.Screen name={"Home"} component={HomeScreen} isLoggedin={isLoggedin}/>
        <Tab.Screen name={"Explore"} component={ExploreScreenMain} />
        <Tab.Screen name={"PodCast"} component={PodcastMainScreen} />
        <Tab.Screen name={"Chats"} component={ChatMainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
      }
    </>
  )
}
const styles = StyleSheet.create({
  MainContainer: {
    height: '100%',
    width: '100%'
  }
})