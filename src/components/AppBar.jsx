import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";

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
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Text style={styles.text}>Repositories</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;
