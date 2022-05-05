import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
  query fetchUseditems($page: Int, $isSoldout: Boolean) {
    fetchUseditems(page: $page, isSoldout: $isSoldout) {
      _id
      name
      remarks
      price
      tags
      pickedCount
      images
      seller {
        _id
        name
      }
      buyer {
        name
      }
    }
  }
`;
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;
