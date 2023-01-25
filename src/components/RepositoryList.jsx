import react from "react";
import { FlatList, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { fontFamilyPlataforms } from "./styleByPlataform";

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

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem style={styles} item={item} />}
    />
  );
};

export default RepositoryList;
