import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { User } from "./user";
import JWTService from "../services/jwt";
import { GraphqlContext } from "../interfaces";

export async function initServer() {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  const graphqlServer = new ApolloServer<GraphqlContext>({
    typeDefs: `
    ${User.types}
    type Query{
       ${User.queries}
    } 
    `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
    },
    introspection: process.env.APPLICATION_ENV !== "production",
    // introspection: true,
  });
  await graphqlServer.start();
  app.use(
    "/graphql",
    expressMiddleware(graphqlServer, {
      context: async ({ req, res }) => {
        const user = req.headers.authorization
          ? JWTService.decodeToken(
              req.headers.authorization.split("Bearer ")[1]
            )
          : undefined;

        return { user };
      },
      // context: async ({ req, res }) => {
      //   const token = req.headers.authorization || "";
      //   const user = await JWTService.decodeToken(token);
      //   return { user };
      // },
      // context: async ({ req, res }) => {
      //   return {
      //     user: req.headers.authorization
      // ? JWTService.decodeToken(
      //     req.headers.authorization.split("Bearer ")[1]
      //   )
      //       : undefined,
      //   };
      // },
    })
  );
  return app;
}

// split("Bearer ")[1]
