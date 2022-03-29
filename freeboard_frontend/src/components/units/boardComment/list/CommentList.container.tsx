import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";

export default function CommentList() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardid) },
  });

  return <CommentListUI data={data} />;
}
