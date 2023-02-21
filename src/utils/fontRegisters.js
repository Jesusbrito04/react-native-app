import { useFonts } from "expo-font";
import roboto from "../../assets/fonts/Roboto.ttf";
import robotoThin from "../../assets/fonts/Roboto-Thin.ttf";
import robotoThinItalic from "../../assets/fonts/Roboto-Thin-Italic.ttf";
import robotoLight from "../../assets/fonts/Roboto-Light.ttf";
import robotoLightItalic from "../../assets/fonts/Roboto-Light-Italic.ttf";
import robotoMedium from "../../assets/fonts/Roboto-Medium.ttf";
import robotoMediumItalic from "../../assets/fonts/Roboto-Medium-Italic.ttf";
import robotoBolt from "../../assets/fonts/Roboto-Bold.ttf";
import robotoBoltItalic from "../../assets/fonts/Roboto-Bold-Italic.ttf";
import robotoBlack from "../../assets/fonts/Roboto-Black.ttf";
import robotoBlackItalic from "../../assets/fonts/Roboto-Black-Italic.ttf";
import arial from "../../assets/fonts/Arial-Narrow.ttf";
import arialTh from "../../assets/fonts/Arial-Th.ttf";
import arialBold from "../../assets/fonts/Arial-Bold.ttf";
import geoArial from "../../assets/fonts/GeoArial.ttf";
import geoArialItalic from "../../assets/fonts/Geo-Arial-Italic.ttf";
import geoArialBold from "../../assets/fonts/Geo-Arial-Bold.ttf";

const FontRegisters = () => {
  const [registerFonts] = useFonts({
    //Roboto

    Roboto: roboto,
    "Roboto-Thin": robotoThin,
    "Roboto-Thin-Italic": robotoThinItalic,
    "Roboto-Light": robotoLight,
    "Roboto-Light-Italic": robotoLightItalic,
    "Roboto-Medium": robotoMedium,
    "Roboto-Medium-Italic": robotoMediumItalic,
    "Roboto-Bold": robotoBolt,
    "Roboto-Bold-Italic": robotoBoltItalic,
    "Roboto-Black": robotoBlack,
    "Roboto-Black-Italic": robotoBlackItalic,

    //Simple Arial

    Arial: arial,
    "Arial-Th": arialTh,
    "Arial-Bold": arialBold,

    //Geo Arial

    GeoArial: geoArial,
    "Geo-Arial-Italic": geoArialItalic,
    "Geo-Arial-Bold": geoArialBold,
  });
  return registerFonts;
};

export default FontRegisters;
