import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { themeColors } from "../theme";
import HomeScreen from "../screens/HomeScreen";
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  ShoppingBagIcon as BagSolid,
  Cog6ToothIcon as SettingSolid,
} from "react-native-heroicons/solid";
import BottomNavigation from "./bottomNavigation";
import CustomDrawer from "../components/customDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: themeColors.bgLight,
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: themeColors.bgLight,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "Roboto-Medium",
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomNavigation}
        options={{
          drawerIcon: ({ color }) => <HomeSolid size={22} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={BottomNavigation}
        options={{
          drawerIcon: ({ color }) => <HeartSolid size={22} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={BottomNavigation}
        options={{
          drawerIcon: ({ color }) => <BagSolid size={22} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
