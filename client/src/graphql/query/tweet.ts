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
export const getSignedURLForTweetQuery = gql`
  query GetSignedURL($imageName: String!, $imageType: String!) {
    getSignedURLForTweet(imageName: $imageName, imageType: $imageType)
  }
`;

