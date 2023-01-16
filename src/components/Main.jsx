import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={{ backgroundColor: "#e1e4e8" }}>
      <AppBar />
      <RepositoryList styles={styles.container} />
    </View>
  );
};

export default Main;
