import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import { fontFamilyPlataforms } from "./styleByPlataform";
import { useApolloClient, useQuery } from "@apollo/client";
import { ME_USER } from "../graphql/queries";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

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
  const { data } = useQuery(ME_USER);
  const authStorage = useContext(AuthStorageContext);
  const { removeAccessToken } = authStorage();
  const client = useApolloClient();

  const handleSignOut = async () => {
    await removeAccessToken();
    console.log("Session has been closed successfully");
    client.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {data?.me !== null ? (
          <TouchableWithoutFeedback onPress={handleSignOut}>
            <Text style={styles.text}>Sign out</Text>
          </TouchableWithoutFeedback>
        ) : (
          <Link to="./SignIn">
            <Text style={styles.text}>Sing In</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
