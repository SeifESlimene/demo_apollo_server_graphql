const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const MONGODB = process.env.MONGO_DB_STRING;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 1450 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
