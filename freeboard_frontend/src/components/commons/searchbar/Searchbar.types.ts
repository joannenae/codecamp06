import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
// import {
//   IQuery,
//   IQueryFetchBoardsArgs,
//   IQueryFetchBoardsCountArgs,
// } from "../../../../src/commons/types/generated";

export interface ISearchbarProps {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbarUIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
