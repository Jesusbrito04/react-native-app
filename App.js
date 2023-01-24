import React, { useEffect } from "react";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import FontRegisters from "./src/components/fontRegisters";
import * as SplashScreen from "expo-splash-screen";

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
      <Main />
    </NativeRouter>
  );
};

export default App;
