import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import Button from "../components/Button";
import { questions } from "../assets/questions";
import { CommonActions, useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { TokenContext } from "./TokenProvider";
import { StackScreenProps } from "@react-navigation/stack";

export function DeveloperTestScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState(questions.length);

  const { token } = useContext(TokenContext);

  const navigation = useNavigation();

  useEffect(() => {
    if (showScore == true) {
      navigation.navigate("Results", { score, numberOfQuestions });

      setShowScore(false);
    }
  }, [showScore]);

  const handleAnswerOptionClick = async (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setModalVisible(!modalVisible);
      setTimeout(function () {
        setCurrentQuestion(nextQuestion);
        setModalVisible(false);
      }, 3000);
    } else {
      const response = await fetch("http://10.0.2.2:3002/results", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          result: score,
          numberOfQuestions: numberOfQuestions,
        }),
      });
      console.log(`Saved results ${response.status} ${response.text}`);
      setModalVisible(!modalVisible);
      setTimeout(async () => {
        setShowScore(true);
        setModalVisible(false);
      }, 3000);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            <Text>Question {currentQuestion + 1}</Text>
            <Text>/{questions.length}</Text>
          </Text>
          <Text style={styles.questionText}>
            {questions[currentQuestion].questionText}
          </Text>
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <Button
              title={answerOption.answerText}
              onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
            ></Button>
          ))}
          <View>
            <Modal
              style={styles.modal}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
              <View style={styles.centeredView}>
                <View style={styles.modal}>
                  <Text style={styles.modalText}>
                    {questions[currentQuestion].questionExplanation}
                  </Text>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: "Verdana",
    color: "#fff",
    marginBottom: 40,
    marginHorizontal: 20,
    textAlign: "center",
  },
  questionText: {
    fontSize: 24,
    fontFamily: "Verdana",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 40,
    marginHorizontal: 40,
  },
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
