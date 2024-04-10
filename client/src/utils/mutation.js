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

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  ) {
    updateUser(
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

export const ADD_CLOTHES = gql`
  mutation addClothes(
    $ClothesName: String
    $profilePicture: String
    $pictures: String
    $gender: String
    $breed: String
    $birthday: String
    $preferences: String
  ) {
    addDog(
      ClothesName: $ClothesName
      profilePicture: $profilePicture
      pictures: $pictures
      gender: $gender
      breed: $breed
      birthday: $birthday
      preferences: $preferences
    )
  }
`;

export const UPDATE_CLOTHES = gql`
  mutation updateClothes(
    $ClothesName: String
    $profilePicture: String
    $pictures: String
    $gender: String
    $breed: String
    $birthday: String
    $preferences: String
  ) {
    updateClothes(
      ClothesName: $ClothesName
      profilePicture: $profilePicture
      pictures: $pictures
      gender: $gender
      breed: $breed
      birthday: $birthday
      preferences: $preferences
    )
  }
`;