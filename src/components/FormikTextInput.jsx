import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";
import { fontFamilyPlataforms } from "./styleByPlataform";

const styles = StyleSheet.create({
  errorText: {
    paddingBottom: 10,
    color: "#d73a4a",
    fontSize: 16,
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

const FormikTextInput = ({
  values,
  handleChange,
  errors,
  touched,
  setTouched,
}) => {
  return (
    <View style={styles.container}>
      {/*<----------------  Input UserName  ---------------->*/}
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

      {/*<----------------  Input Password  ---------------->*/}

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
    </View>
  );
};

export default FormikTextInput;
