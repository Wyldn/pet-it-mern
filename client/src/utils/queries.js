import { gql } from '@apollo/client';

export const QUERY_CLOTHINGS = gql`
    query getClothings($user: ID) {
        clothings(user: $user) {
            _id
            clothingName
            profilePicture
            pictures
            clothingType
            price
            preferences
            clothingOwner {
                _id
                firstName
                lastName
            }
        }
    }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
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
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      pet {
        _id: ID
        clothingName: String!
        profilePicture: String!
        pictures: String!
        clothingType: String!
        price: String!
        preferences: Array
      }
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;