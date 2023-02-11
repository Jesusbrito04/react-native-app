import React from "react";
import FormikTextInput from "./FormikTextInput";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import useSignIn from "../hooks/useSignIn";
import { setAccessToken, getAccessToken } from "../utils/authStorage";
import { Formik } from "formik";
import { fontFamilyPlataforms } from "./styleByPlataform";
import validateScheme from "../utils/validateScheme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  botton: {
    backgroundColor: "#0366d6",
    width: "100%",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    fontFamily: fontFamilyPlataforms,
  },
});

const SignIn = () => {
  const [signIn, result] = useSignIn();

  const onSubmit = async (values, action) => {
    const { username, password } = values;

    action.resetForm();

    try {
      const { data } = await signIn({ username, password });
      setAccessToken(data.authenticate.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validateScheme}
        onSubmit={onSubmit}
        initialValues={{ username: "", password: "" }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          errors,
          touched,
          setTouched,
        }) => (
          <SafeAreaView>
            <FormikTextInput
              values={values}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              errors={errors}
              touched={touched}
              setTouched={setTouched}
            />
            <TouchableWithoutFeedback
              style={{ display: "flex", backgroundColor: "red" }}
              onPress={handleSubmit}
            >
              <View style={styles.botton}>
                <Text style={styles.text}>Sign in</Text>
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
