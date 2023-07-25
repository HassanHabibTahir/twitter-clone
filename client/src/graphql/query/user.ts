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
