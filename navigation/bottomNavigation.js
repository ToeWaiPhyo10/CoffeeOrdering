import React from "react";
import {
  HomeIcon as HomeOutline,
  HeartIcon as HeartOutline,
  ShoppingBagIcon as BagOutline,
  Cog6ToothIcon as SettingOutline,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  ShoppingBagIcon as BagSolid,
  Cog6ToothIcon as SettingSolid,
} from "react-native-heroicons/solid";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { themeColors } from "../theme";
import HomeScreen from "../screens/HomeScreen";
const Tabs = AnimatedTabBarNavigator();

export default function BottomNavigation() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: themeColors.bgLight,
        inactiveTintColor: "white",
      }}
      appearance={{
        floating: true,
        shadow: true,
        whenActiveShow: "icon-only",
        activeTabBackgrounds: "white",
        tabBarBackground: themeColors.bgLight,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const Icon = focused ? HomeSolid : HomeOutline;
            return <Icon color={color} size={25} />;
          },
        }}
      />
      <Tabs.Screen
        name="Favourite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const Icon = focused ? HeartSolid : HeartOutline;
            return <Icon color={color} size={25} />;
          },
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const Icon = focused ? BagSolid : BagOutline;
            return <Icon color={color} size={25} />;
          },
        }}
      />
      <Tabs.Screen
        name="Setting"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const Icon = focused ? SettingSolid : SettingOutline;
            return <Icon color={color} size={25} />;
          },
        }}
      />
    </Tabs.Navigator>
  );
}
