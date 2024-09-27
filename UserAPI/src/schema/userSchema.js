export const typeDefs = `#graphql
    type User {
        id: ID!,
        name: String!,
        email: String!
    }

    type Query {
        users: [User]
        searchUsers(searchTerm: String!): [User]
    }

    type Mutation {
        addUser(name: String!, email: String!): User
        deleteUser(id: ID!): User
    }
`