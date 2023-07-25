import { graphql } from "@/gql";
import { gql } from "graphql-request";

export const createTweetMutation = gql`
  mutation Mutation($payload: CreateTweetData!) {
    createTweet(payload: $payload) {
      id
    }
  }
`;
