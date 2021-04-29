import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Linking,
} from "react-native";
import Button from "../components/Button";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeButton from "../components/HomeButton";

export function AboutScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/logo.png")}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.contentBlockContainer}>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          velit! Perferendis delectus voluptatem quae, id repellendus fugiat
          itaque neque debitis nobis ipsum dolorum obcaecati! Cum ducimus
          excepturi repellendus! Laborum, iusto.
        </Text>
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/max-webster-khan")
            }
          >
            <Image
              style={styles.socialIcon}
              source={require("../assets/LinkedIN.png")}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://github.com/maxwebsterkhan/We-Train-Apprentices"
              )
            }
          >
            <Image
              style={styles.socialIcon}
              source={require("../assets/Github_black.png")}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.socialText}>Don't like the app? Let us know.</Text>
      </View>
      <View style={styles.container}>
        <HomeButton></HomeButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: 70,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    marginBottom: 20,
    fontFamily: "Verdana",
  },
  contentBlockContainer: {
    backgroundColor: "#ffff",
    marginTop: 20,
    borderRadius: 8,
    paddingHorizontal: 40,
    marginHorizontal: 40,
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 40,
  },
  sectionText: {
    fontFamily: "Verdana",
    fontSize: 16,
    color: "#000000",
    textAlign: "justify",
  },
  socialText: {
    fontFamily: "Verdana",
    fontSize: 14,
    marginTop: 20,
    color: "#000000",
    paddingVertical: 20,
  },
  socialIconsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  socialIcon: {
    height: 48,
    width: 48,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
