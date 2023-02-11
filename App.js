import React, { useEffect } from "react";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import FontRegisters from "./src/utils/fontRegisters";
import * as SplashScreen from "expo-splash-screen";
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "./src/utils/apolloClient";

const apolloClient = createApolloClient();

const App = () => {
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);
  if (!FontRegisters()) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
