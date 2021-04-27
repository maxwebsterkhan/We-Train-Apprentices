import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { DevScreen } from "./screens/DevScreen";
import { TestScreen } from "./screens/TestScreen";
import { QuizScreen } from "./screens/QuizScreen";
import { QuizResultsScreen } from "./screens/QuizResultsScreen";
import { AboutScreen } from "./screens/AboutScreen";

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Developer" component={DevScreen} />
        <Stack.Screen name="Tester" component={TestScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Results" component={QuizResultsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
