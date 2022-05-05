import { IBoardComment } from "./../../../../commons/types/generated/types";
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
  onChangeStar: (value: number) => void;
  onClickButton: () => void;
  // handleChange: (value: number) => void;
  onClickUpdate: () => void;
  value: any;
  isEdit?: boolean;
  setIsEdit?: any;
  el?: IBoardComment;
  writer: string;
  password: string;
  contents: string;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
}
