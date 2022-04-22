import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      contents
      price
      tags
      remarks
      images
    }
  }
`;
export const UPDATE_USED_ITEM = gql`
  mutation updateUsedItem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $UpdateUseditemInput
      useditemId: $useditemId
    )
  }
`;
