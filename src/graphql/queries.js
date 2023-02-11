import { gql } from "apollo-boost";

export const GET_REPOSITORY = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          description
          forksCount
          id
          language
          name
          ownerAvatarUrl
          reviewCount
          ratingAverage
          stargazersCount
          url
        }
      }
    }
  }
`;
