import { IQuery } from "../../../../../commons/types/generated/types";

export interface IProductListUIProps {
  data: Pick<IQuery, "fetchUseditems">;
  onLoadMore: () => void;
  onChangeKeyword: (value: string) => void;

  onClickSell: () => void;
  onClickSold: () => void;
  onClickSubmit: () => void;

  isSoldout: any;
  keyword: any;

  setBasketItems: any;
  basketItems: any;
}
