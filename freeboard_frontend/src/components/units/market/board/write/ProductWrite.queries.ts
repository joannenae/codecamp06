import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUsedItem($createUseditemInput: CreateUseditemInput!) {
    createBoard(createUseditemInput: $CreateUseditemInput) {
      name
      contents
      price
      tags
      remarks
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
