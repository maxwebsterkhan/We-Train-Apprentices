import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View } from "react-native";

export function PreviousResultsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Previous Results</Text>
    </View>
  );
}
