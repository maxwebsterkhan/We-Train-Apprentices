import React from "react";
import Button from "../components/Button";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const HomeButton = () => {
  const navigation = useNavigation();
  return <Button title="Home" onPress={() => navigation.navigate("Home")} />;
};
export default HomeButton;
