import { IQuery } from "../../../../../commons/types/generated/types";
import { ChangeEvent } from "react";

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
  isOpen: any;
  isEdit: boolean;
  isActive: boolean;
  fileUrls?: string[];
  data?: Pick<IQuery, "fetchUseditem">;

  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRemark: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: any;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTag: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  showModal: () => void;
  onClickLog: () => void;

  onClickSignUp: () => void;
  onClickUpdate: () => void;
  onClickEdit: () => void;

  handleComplete: any;
  handleCancel: any;
  handleOk: any;
  address: string;
  zipcode: string;
  addressDetail: string;
  hashArr: any;
  setHashArr: any;
}
export interface ISubmitButtonProps {
  isActive: boolean;
}
