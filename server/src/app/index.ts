import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
export async function initServer() {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  const graphqlServer = new ApolloServer({
    typeDefs: `
    type Query{
        sayHello:String
        sayHelloTome(name:String!):String
    } 
    `,
    resolvers: {
      Query: {
        sayHello: () => `Hello from Graphql Server`,
        sayHelloTome: (parent: any, { name }: { name: string }) => `${name}`,
      },
    },
  });
  await graphqlServer.start();
  app.use("/graphql", expressMiddleware(graphqlServer));
  return app;
}
