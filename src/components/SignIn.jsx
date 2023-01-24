import React from "react";
import FormikTextInput from "./FormikTextInput";
import { Text, View, StyleSheet } from "react-native";
import { Formik } from "formik";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
});

const SignIn = () => {
  return (
    <View style={styles.container}>
      <FormikTextInput />
    </View>
  );
};

export default SignIn;
