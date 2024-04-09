import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CLOTHING = gql`
  mutation addClothing(
    $clothingName: String!
    $profilePicture: String!
    $pictures: String!
    $clothingType: String!
    $price: String!
    $preferences: Array
  ) {
    addClothing(
      $clothingName: String!
      $profilePicture: String!
      $pictures: String!
      $clothingType: String!
      $price: String!
      $preferences: Array
    )
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;









