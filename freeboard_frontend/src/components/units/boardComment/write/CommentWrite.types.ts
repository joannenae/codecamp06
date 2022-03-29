import { ChangeEvent } from "react";

export interface ICommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickButton: () => void;
  handleChange: () => void;
  value: any;
  contents: string;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
