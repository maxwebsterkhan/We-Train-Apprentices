import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View } from "react-native";

export function QuizResultsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Results Screen</Text>
    </View>
  );
}
