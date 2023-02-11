import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";

const createApolloClient = () => {
  console.log(Constants.manifest.extra.env);
  const client = new ApolloClient({
    uri: Constants.manifest.extra.env,
    cache: new InMemoryCache(),
  });
  return client;
};

export default createApolloClient;
