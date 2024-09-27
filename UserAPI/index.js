import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { getAllUsersResolver } from "./resolvers/queries/getAllUsersResolver.js";
import { addUserResolver } from "./resolvers/mutations/addUserResolver.js";
import { deleteUserResolver } from "./resolvers/mutations/deleteUserResolver.js";

const resolvers = {
    Query: getAllUsersResolver,
    Mutation: {
        ...addUserResolver,
        ...deleteUserResolver,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`Server ready at port: `, 4000)