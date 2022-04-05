import {
  IQuery,
  IBoardComment,
} from "../../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export interface ICommentListUIItemProps {
  el: IBoardComment;
}
