// gql imported
const { gql } = require('apollo-server-express');

// TODO: Query, User, and other. 
    // TODO: Rest of 'Mutation'
const typeDefs = gql`

    type User {
        _id: ID
        firstName: String!
        lastName: String!
        email: String!
        clothing: [clothing]
    }

    type Clothing {
        _id: ID
        clothingName: String!
        profilePicture: String!
        pictures: String!
        color: String!
        clothingType: String!
        cost: String!
        clothingOwner: [User]
    }

    type Mutation {
        login(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addClothingName(clothingName: String!, profilePicture: String!, pictures: String!, color: String!, clothingType: String!, cost: String!, : Clothing
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateClothing(ClothingName: String, profilePicture: String, pictures: String, color: String, clothingType: String, cost: String, : Clothing
`;

module.exports = typeDefs;