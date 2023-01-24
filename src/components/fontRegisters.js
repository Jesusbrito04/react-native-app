import { useFonts } from "expo-font";

const FontRegisters = () => {
  const [registerFonts] = useFonts({
    //Roboto

    Roboto: require("../../assets/fonts/Roboto.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Thin-Italic": require("../../assets/fonts/Roboto-Thin-Italic.ttf"),
    "Roboto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Light-Italic": require("../../assets/fonts/Roboto-Light-Italic.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Medium-Italic": require("../../assets/fonts/Roboto-Medium-Italic.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Bold-Italic": require("../../assets/fonts/Roboto-Bold-Italic.ttf"),
    "Roboto-Black": require("../../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Black-Italic": require("../../assets/fonts/Roboto-Black-Italic.ttf"),

    //Simple Arial

    Arial: require("../../assets/fonts/Arial-Narrow.ttf"),
    "Arial-Th": require("../../assets/fonts/Arial-Th.ttf"),
    "Arial-Bold": require("../../assets/fonts/Arial-Bold.ttf"),

    //Geo Arial

    GeoArial: require("../../assets/fonts/GeoArial.ttf"),
    "Geo-Arial-Italic": require("../../assets/fonts/Geo-Arial-Italic.ttf"),
    "Geo-Arial-Bold": require("../../assets/fonts/Geo-Arial-Bold.ttf"),
  });
  return registerFonts;
};

export default FontRegisters;
