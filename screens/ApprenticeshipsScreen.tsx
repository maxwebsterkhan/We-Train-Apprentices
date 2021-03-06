import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Button from "../components/Button";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeButton from "../components/HomeButton";

export function ApprenticeshipsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apprenticeships</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/logo.png")}
          resizeMode="stretch"
        />
      </View>
      <Button
        title="Software Developer Information"
        onPress={() => navigation.navigate("Developer")}
      />
      <Button
        title="Software Tester Information"
        onPress={() => navigation.navigate("Tester")}
      />
      <HomeButton></HomeButton>
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
