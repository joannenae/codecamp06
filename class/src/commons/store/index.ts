import { atom } from "recoil";

// 글로벌 스테이트
export const isEditState = atom({
  key: "isEditState",
  default: false,
});
export const accessTokenState = atom({
  key: "iaccessTokenState",
  default: "",
});
