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

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
