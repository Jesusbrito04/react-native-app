import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccessToken = async () => {
  // Get the access token for the storage
  try {
    const accessToken = await AsyncStorage.getItem("auth_access_token");
    console.log(accessToken);
  } catch (error) {
    console.log("couldn't get access token");
  }
};

export const setAccessToken = async (accessToken) => {
  // Add the access token to the storage
  try {
    await AsyncStorage.setItem("auth_access_token", accessToken);
    console.log(accessToken);
  } catch (error) {
    console.log("Could not set the access token");
  }
};

export const removeAccessToken = () => {
  // Remove the access token from the storage
};
