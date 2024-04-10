import { gql } from '@apollo/client';

export const QUERY_CLOTHES = gql`
    query getClothes($user: ID) {
        Clothes(user: $user) {
            _id
            ClotohesName
            profilePicture
            pictures
            birthday
            preferences
            ClothesParent {
                _id
                firstName
                lastName
            }
        }
    }
`;

// export const QUERY_PRODUCTS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       name
//       description
//       price
//       quantity
//       image
//       category {
//         _id
//       }
//     }
//   }
// `;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

// export const QUERY_ALL_PRODUCTS = gql`
//   {
//     products {
//       _id
//       name
//       description
//       price
//       quantity
//       category {
//         name
//       }
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      clothes {
        _id
        ClothesName
        profilePicture
        pictures
        breed
        birthday
        preferences
      }
    }
  }
`;