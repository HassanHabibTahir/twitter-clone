import { graphql } from "@/gql";
import { gql } from "graphql-request";
export const getAllTweetsQuery = gql`
  query GetAllTweets {
    getAllTweets {
      id
      content
      imageURL
      author {
        id
        firstName
        lastName
        profileImageUrl
      }
    }
  }
`;
