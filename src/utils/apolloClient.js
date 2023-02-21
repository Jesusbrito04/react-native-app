import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";

const createApolloClient = (authStorage) => {
  const { getAccessToken } = authStorage();
  const httpLink = new HttpLink({
    uri: Constants.manifest.extra.env,
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await getAccessToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
  return client;
};

export default createApolloClient;
