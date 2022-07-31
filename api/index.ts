import express, { Express, Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";
import cors from "cors";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const ALLOWED_HOSTS = ["http://localhost:3000"];
export const PORT = 4000;
async function graphqlAPI() {
  const app: Express = express();

  // For Cors
  app.use(
    cors({
      origin: ALLOWED_HOSTS,
    })
  );
  // Schema
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema,
    /* Here, we could use [context] which is very valuable when dealing with databases, authentications, request responses and so on 
    but since don't need any of that in this app we're not using
    */
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ] /* Added to this plugin to use, GraphiQL playground isntead of apollo sandbox */,
  });

  await server.start();
  server.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => {
    console.log(`⚡️[Graphql Server]: running on localhost:${PORT}/graphql`);
  });
}
graphqlAPI();
