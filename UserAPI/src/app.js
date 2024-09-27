import dotenv from 'dotenv'; 
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/userSchema.js";
import { getAllUsersResolver } from "./resolvers/queries/getAllUsersResolver.js";
import { searchUsersResolver } from "./resolvers/queries/searchUsersResolver.js";
import { addUserResolver } from "./resolvers/mutations/addUserResolver.js";
import { deleteUserResolver } from "./resolvers/mutations/deleteUserResolver.js";
import mongoose from "mongoose";

dotenv.config({ path: '../.env' });

console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

const resolvers = {
    Query: {
        ...getAllUsersResolver,
        ...searchUsersResolver,
    },
    Mutation: {
        ...addUserResolver,
        ...deleteUserResolver,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

const start = async () => {
    try {
        await connectDB();

        const { url } = await startStandaloneServer(server, {
            listen: { port: PORT },
        });
        console.log(`Server ready at: ${url}`);
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

start();
