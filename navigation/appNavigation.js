import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox, Platform } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import ProductScreen from "../screens/ProductScreen";
import BottomNavigation from "./bottomNavigation";
import DrawerNavigation from "./drawerNavigation";
import MainNavigation from "./mainNavigation";

const Stack = createNativeStackNavigator();
const ios = Platform.OS == "ios";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />

        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={MainNavigation}
        />
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
