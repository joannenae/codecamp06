// import { MouseEvent } from "react";

// export interface IBoardListUIProps {
//   data: any;
//   refetch: any;
//   onClickMoveToBoardNew: () => void;
//   onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
// }
import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data: any;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}
