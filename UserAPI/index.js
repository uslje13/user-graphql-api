import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { v4 as uuidv4 } from 'uuid';
import db from './_db.js'

const resolvers = {
    Query: {
        users() {
            return db.users
        },
    },
    Mutation: {
        addUser(_, { name, email }) {
            const newUser = {
                id: uuidv4(),
                name,
                email
            };
            db.users.push(newUser);
            return newUser;
        },
        deleteUser(_, { id }) {
            const index = db.users.findIndex(user => user.id === id);
            if (index === -1) {
                throw new Error(`User with id ${id} not found`);
            }
            const deletedUser = db.users.splice(index, 1);
            return deletedUser[0];
        },
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`Server ready at port: `, 4000)