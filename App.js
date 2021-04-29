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
import { ApprenticeshipsScreen } from "./screens/ApprenticeshipsScreen";
import { KnowledgeTestScreen } from "./screens/KnowledgeTestScreen";
import { PreviousResultsScreen } from "./screens/PreviousResultsScreen";
import { DeveloperTestScreen } from "./screens/DeveloperTestScreen";

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            backgroundColor: "#05668D",
          },
          cardStyle: { backgroundColor: "#05668D" },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Developer"
          component={DevScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tester"
          component={TestScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Results"
          component={QuizResultsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PreviousResults"
          component={PreviousResultsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KnowledgeTest"
          component={KnowledgeTestScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Apprenticeships"
          component={ApprenticeshipsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeveloperTestScreen"
          component={DeveloperTestScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
