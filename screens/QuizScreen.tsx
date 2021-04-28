import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { questions } from "../assets/questions";
import { CommonActions, useNavigation } from "@react-navigation/core";

export function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    if (showScore == true) {
      navigation.dispatch(
        CommonActions.reset({
          routes: [{ name: "Home" }, { name: "Results" }],
        })
      );
      setShowScore(false);
    }
  }, [showScore]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text>Question {currentQuestion + 1}</Text>
        <Text>/{questions.length}</Text>
      </Text>
      <Text style={styles.questionText}>
        <Text>{questions[currentQuestion].questionText}</Text>
      </Text>

      {questions[currentQuestion].answerOptions.map((answerOption) => (
        <Button
          title={answerOption.answerText}
          onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
        ></Button>
      ))}
      <View>
        <Button title={score.toString()} onPress={() => {}}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    color: "#fff",
    marginBottom: 40,
    marginHorizontal: 20,
    textAlign: "center",
  },
});
