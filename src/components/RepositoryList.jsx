import react, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import RepositoryItem from "./RepositoryItem";
import { fontFamilyPlataforms } from "./styleByPlataform";
import useRepositories from "../hooks/useRepositories";
import { getAccessToken } from "../utils/authStorage";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: "#ffffff",
    padding: 15,
  },

  img: {
    height: 50,
    width: 50,
    marginRight: 15,
    borderRadius: 5,
  },

  header: {
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    fontFamily: fontFamilyPlataforms,
    color: "#24292e",
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    color: "#586069",
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fontFamilyPlataforms,
  },

  headerInfo: {
    flexDirection: "column",
    paddingRight: 50,
  },
  headerText: {
    fontSize: 16,
    color: "white",
    fontFamily: fontFamilyPlataforms,
  },

  body: {
    flexDirection: "row",
  },
  bodyInfo: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
  },
  languageLabel: {
    backgroundColor: "#0366d6",
    padding: 5,
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fontFamilyPlataforms,
  },

  statics: {
    fontWeight: "bold",
    color: "#24292e",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: fontFamilyPlataforms,
  },

  text: {
    color: "#586069",
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fontFamilyPlataforms,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading } = useRepositories();
  // Get the nodes from the edges array
  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem style={styles} item={item} />}
    />
  );
};

export default RepositoryList;
