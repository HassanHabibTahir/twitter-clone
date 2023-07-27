// import { graphql } from "../../gql";
import { gql } from "graphql-request";

export const verifyUserGoogleTokenQuery = gql`
  query verifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`;

export const getCurrentUserQuery = gql`
  query Query {
    getCurrentUser {
      id
      firstName
      lastName
      email
      profileImageUrl
    }
  }
`;

// query GetuserById($id: ID!) {
// getUserById(id: $id) {
export const getUserByIdQuery = gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      id
      firstName
      lastName
      profileImageUrl
      email
      tweets {
        content
        id
        author {
          lastName
          firstName
          profileImageUrl
        }
      }
    }
  }
`;
