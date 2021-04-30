import { useNavigation } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "../components/Button";
import { TokenContext } from "./TokenProvider";

export function LoginScreen() {
  const { setToken } = useContext(TokenContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/logo.png")}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(p) => {
            setPassword(p);
          }}
        />
      </View>
      <Button
        title="Login"
        onPress={async () => {
          const response = await fetch("http://10.0.2.2:3002/login", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
          if (response.status === 200) {
            const token = await response.text();
            console.log("Login pass " + token);
            setToken(token);
            navigation.navigate("Home");
          } else {
            console.log("Login failed");
          }
        }}
      />
      <Button
        title="Register"
        onPress={() => {
          fetch("http://10.0.2.2:3002/user", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    marginBottom: 20,
    fontFamily: "Verdana",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
    borderRadius: 8,
  },
  imageContainer: {
    width: "80%",
    height: 75,
    marginBottom: 20,
  },
});
