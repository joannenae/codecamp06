import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent, ChangeEvent } from "react";

export interface ICommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
  onClickDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  isOpenDeleteModal: boolean;
  onClickDelete: () => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
