import { Platform } from "react-native";

export const fontFamilyPlataforms = Platform.select({
  ios: "Arial",
  android: "Roboto",
  default: "System",
});
