import { gql } from "@apollo/client";

export const FETCH_COMMENT_LIST = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

export const DELETE_COMMENT_LIST = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;
