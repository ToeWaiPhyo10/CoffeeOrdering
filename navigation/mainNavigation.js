import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./bottomNavigation";
import DrawerNavigation from "./drawerNavigation";
const MainStack = createNativeStackNavigator();
export default function MainNavigation() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Drawer"
        options={{ headerShown: false }}
        component={DrawerNavigation}
      />
      <MainStack.Screen
        name="BottomNavigatior"
        options={{ headerShown: false }}
        component={BottomNavigation}
      />
    </MainStack.Navigator>
  );
}
