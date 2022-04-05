import { IBoardComment } from "./../../../../../../class/src/commons/types/generated/types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ICommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

export interface ICommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickButton: () => void;
  handleChange: (value: number) => void;
  onClickUpdate: () => void;
  value: any;
  contents: string;
  isEdit?: boolean;
  setIsEdit?: any;
  el?: IBoardComment;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
