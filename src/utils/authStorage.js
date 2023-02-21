import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthStorage = (item = "auth_access_token") => {
  let namespace = item;

  const setAccessToken = async (accessToken) => {
    // Add the access token to the storage
    try {
      await AsyncStorage.setItem(`${namespace}:token`, accessToken);
    } catch (error) {
      console.log("Could not set the access token");
    }
  };

  const getAccessToken = async () => {
    // Get the access token for the storage
    try {
      const accessToken = await AsyncStorage.getItem(`${namespace}:token`);
      return accessToken;
    } catch (error) {
      console.log("Couldn't get access token");
    }
  };

  const removeAccessToken = async () => {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${namespace}:token`);
  };

  return { setAccessToken, getAccessToken, removeAccessToken };
};
