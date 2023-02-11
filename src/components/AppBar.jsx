import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import { fontFamilyPlataforms } from "./styleByPlataform";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    paddingBottom: 10,
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
    fontFamily: fontFamilyPlataforms,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to="./SignIn">
          <Text style={styles.text}>Sing In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
