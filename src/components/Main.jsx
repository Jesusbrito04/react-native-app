import { StyleSheet, View } from "react-native";
import React from "react";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import SignIn from "./SignIn";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});
