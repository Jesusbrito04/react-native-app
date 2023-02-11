import { useMutation } from "@apollo/client";
import { USER_MUTATION } from "../graphql/mutation";

const useSignIn = () => {
  const [mutation, result] = useMutation(USER_MUTATION);

  const signIn = async ({ username, password }) => {
    const data = await mutation({
      variables: {
        credentials: {
          username: username,
          password: password,
        },
      },
    });
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
