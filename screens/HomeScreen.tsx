import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Button from "../components/Button";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/logo.png")}
          resizeMode="stretch"
        />
      </View>
      <Button
        title="Apprenticeships"
        onPress={() => navigation.navigate("Apprenticeships")}
      />
      <Button
        title="Knowledge Test"
        onPress={() => navigation.navigate("Quiz")}
      />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
    borderRadius: 8,
  },
  imageContainer: {
    width: "80%",
    height: 75,
    marginBottom: 70,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    marginBottom: 20,
    fontFamily: "Verdana",
  },
});
