import { View, Text } from "react-native";
import React from "react";
import AuthIcon from "../assets/icons/authIcons";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <AuthIcon />
      <View
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "#d4a574",
        }}
        className="px-5 flex flex-1 justify-between  pt-8 -mt-14"
      ></View>
    </View>
  );
}
