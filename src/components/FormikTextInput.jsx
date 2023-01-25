import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { fontFamilyPlataforms } from "./styleByPlataform";

const styles = StyleSheet.create({
  errorText: {
    paddingBottom: 10,
    color: "#d73a4a",
    fontSize: 16,
    fontFamily: fontFamilyPlataforms,
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
  fieldStyle: {
    marginBottom: 10,
    borderStyle: "solid",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

const validateScheme = () => {
  return yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
};

const FormikTextInput = ({ name, ...props }) => {
  return (
    <Formik
      validationSchema={validateScheme}
      onSubmit={(value, actions) => {
        console.log(value);
        actions.resetForm();
      }}
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
        <View style={styles.container}>
          <TextInput
            onChangeText={handleChange("username")}
            value={values.username}
            onBlur={() => setTouched(true)}
            placeholder="Username"
            style={[
              styles.fieldStyle,
              touched.username && errors.username
                ? { borderColor: "#d73a4a" }
                : { borderColor: "#d3d3d3" },
            ]}
          />
          {touched.username && errors.username && (
            <Text style={[styles.errorText]}>{errors.username}</Text>
          )}
          <TextInput
            value={values.password}
            placeholder="Password"
            onChangeText={handleChange("password")}
            secureTextEntry={true}
            style={[
              styles.fieldStyle,
              touched.password && errors.password
                ? { borderColor: "#d73a4a" }
                : { borderColor: "#d3d3d3" },
            ]}
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <TouchableWithoutFeedback
            style={{ display: "flex", backgroundColor: "red" }}
            onPress={handleSubmit}
          >
            <View style={styles.botton}>
              <Text style={styles.text}>Sign in</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </Formik>
  );
};
export default FormikTextInput;
