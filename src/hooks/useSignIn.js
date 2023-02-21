import { useApolloClient, useMutation } from "@apollo/client";
import { USER_MUTATION } from "../graphql/mutation";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  const [mutation, result] = useMutation(USER_MUTATION);
  const authStorage = useContext(AuthStorageContext);
  const { setAccessToken } = authStorage();
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutation({
      variables: {
        credentials: {
          username: username,
          password: password,
        },
      },
    });
    await setAccessToken(data.authenticate.accessToken);
    client.resetStore();

    return data;
  };

  return { signIn, result };
};

export default useSignIn;
