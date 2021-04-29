import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../components/HomeButton";
import { TokenContext } from "./TokenProvider";

type Props = {
  score: Number;
};

export function QuizResultsScreen({ score }: Props) {
  console.log(score);
  return (
    <View style={styles.centeredView}>
      <View style={styles.modal}>
        <Text style={styles.modalText}>You Scored {score}/5</Text>
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
