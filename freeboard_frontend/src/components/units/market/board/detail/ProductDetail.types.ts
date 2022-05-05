export interface IProductDetailUIProps {
  data: any;
  onClickMoveList: () => void;
  onClickMoveBuy: () => void;
  onClickSignUp: () => void;
  onClickUpdate: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickPick: () => void;
  onClickBasket: () => void;
  onClickDeleteBasket: () => void;
  onClickBuy: () => void;
  bbb: any;

  isOpen: any;
  isEdit: boolean;
  isBaskets: any;
  // onClickEdit: () => void;
}
