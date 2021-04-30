import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeButton from "../components/HomeButton";
import { TokenContext } from "./TokenProvider";

type Results = {
  result: number;
  numberOfQuestions: number;
};

export function PreviousResultsScreen() {
  const { token } = useContext(TokenContext);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await fetch("http://10.0.2.2:3002/results", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.centeredView}>
          {results.map((item) => {
            return (
              <View style={styles.modal}>
                <Text style={styles.modalText}>
                  {Math.floor((item.result / item.numberOfQuestions) * 100)}%
                </Text>
              </View>
            );
          })}
          <HomeButton></HomeButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  modalText: {
    fontSize: 24,
    fontFamily: "Verdana",
    color: "#000000",
    textAlign: "center",
  },
  modal: {
    margin: 10,
    backgroundColor: "#f0f3bd",
    borderRadius: 500,
    padding: 30,
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
