import { ChangeEvent } from "react";
import { IQuery } from "../../../../../../src/commons/types/generated/types";

export interface IProductWriteProps {
  isEdit: boolean;
  data?: any;
}
export interface IUpdateUseditemInput {
  name?: string;
  contents?: string;
  images?: string[];
}

export interface IProductWriteUIProps {
  isEdit: boolean;
  isActive: boolean;
  fileUrls?: string[];
  data?: Pick<IQuery, "fetchUseditem">;

  nameError: string;
  remarkError: string;
  contentError: string;
  priceError: string;
  tagError: string;

  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRemark: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: any;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTag: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;

  onClickSignUp: () => void;
  onClickUpdate: () => void;

  // isAddress: string;
}
export interface ISubmitButtonProps {
  isActive: boolean;
}
