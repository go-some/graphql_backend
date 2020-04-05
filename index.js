import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose';

import resolvers from "./graphql/resolvers"

const uri = `mongodb+srv://${process.env.DBID}:${encodeURIComponent(process.env.DBPW)}@${process.env.DBHOST}/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log("mongodb connected");
})

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
})

server.start({ port: process.env.PORT || 4000 }, () => {
  console.log('Server is running on localhost:4000')
});
