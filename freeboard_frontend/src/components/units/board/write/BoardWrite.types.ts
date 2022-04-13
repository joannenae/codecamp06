import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}
export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IBoardWriteUIProps {
  isActive: boolean;
  nameError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickSignUp: () => void;
  onClickUpdate: () => void;
  showModal: () => void;
  handleComplete: any;
  handleCancel: any;
  handleOk: any;
  isOpen: any;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  address: string;
  zipcode: string;
  addressDetail: string;
  fileUrls: string[];
}
