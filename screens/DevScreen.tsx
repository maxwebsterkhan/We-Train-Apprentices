import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  Linking,
} from "react-native";
import { developerContent } from "../assets/content";
import HomeButton from "../components/HomeButton";

export const DevScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Software Developer</Text>

        <View style={styles.contentBlockContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/1.jpg")}
              resizeMode="stretch"
            />
          </View>
          <Text style={styles.sectionHeading}>
            {developerContent.RoleProfileTitle}
          </Text>
          <Text style={styles.sectionText}>
            {developerContent.RoleProfileContent}
          </Text>
          <Text style={styles.sectionText}>
            {developerContent.TypicalRoles}
          </Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/2.jpg")}
              resizeMode="stretch"
            />
          </View>
          <Text style={styles.sectionHeading}>
            {developerContent.EnterRequirementsTitle}
          </Text>
          <Text style={styles.sectionText}>
            {developerContent.EntryRequirements}
          </Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/3.jpg")}
              resizeMode="stretch"
            />
          </View>
          <Text style={styles.sectionHeading}>
            {developerContent.QualificationsTitle}
          </Text>
          <Text style={styles.sectionText}>
            {developerContent.QualificationsDetails}
          </Text>
          <Text
            style={styles.sectionLink}
            onPress={() => Linking.openURL(developerContent.QualificationsLink)}
          >
            Apprenticeship Standards
          </Text>
          <HomeButton></HomeButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
    borderRadius: 8,
  },
  imageContainer: {
    width: "90%",
    height: 240,
    paddingVertical: 20
  },
  contentBlockContainer: {
    width: "100%",
    backgroundColor: "#ffff",
    marginTop: 20,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
   
  },
  sectionHeading: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
    marginTop: 20,
    fontFamily: "Verdana",
  },
  sectionText: {
    color: "#000000",
    fontSize: 15,
    textAlign: "justify",
    paddingBottom: 20,
    fontWeight: "400",
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Verdana",
  },
  sectionLink: {
    color: "#02c39a",
    fontSize: 15,
    textAlign: "justify",
    paddingBottom: 20,
    fontWeight: "400",
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Verdana",
  },
  sectionTitle: {
    color: "#ffff",
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 20,
    marginTop: 20,
    fontFamily: "Verdana",
  },
});
