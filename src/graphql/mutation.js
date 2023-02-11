import { gql } from "apollo-boost";

export const USER_MUTATION = gql`
  mutation Mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
      user {
        username
      }
    }
  }
`;
