import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Results } from "../backend/database/schema";
import HomeButton from "../components/HomeButton";
import { TokenContext } from "./TokenProvider";

export type ScreenParamList = {
  Results: {
    score: Number;
    numberOfQuestions: Number;
  };
};

type Props = StackScreenProps<ScreenParamList, "Results">;

export function QuizResultsScreen({ route }: Props) {
  const { token } = useContext(TokenContext);
  const { score } = route.params;
  const { numberOfQuestions } = route.params;

  return (
    <View style={styles.centeredView}>
      <View style={styles.modal}>
        <Text style={styles.modalText}>
          You Scored {score}/{numberOfQuestions}
        </Text>
      </View>
      <HomeButton></HomeButton>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 24,
    fontFamily: "Verdana",
    color: "#000000",
    textAlign: "center",
  },
  modal: {
    margin: 20,
    backgroundColor: "#f0f3bd",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
