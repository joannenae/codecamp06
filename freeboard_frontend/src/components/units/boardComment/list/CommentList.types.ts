import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
}
