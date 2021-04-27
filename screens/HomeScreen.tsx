import React from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Software Developer Information"
        onPress={() => navigation.navigate("Developer")}
      />
      <Button
        title="Software Tester Information"
        onPress={() => navigation.navigate("Tester")}
      />
      <Button title="Take Quiz" onPress={() => navigation.navigate("Quiz")} />
      <Button
        title="Quiz Results"
        onPress={() => navigation.navigate("Results")}
      />
      <Button title="About Us" onPress={() => navigation.navigate("About")} />
    </View>
  );
}
