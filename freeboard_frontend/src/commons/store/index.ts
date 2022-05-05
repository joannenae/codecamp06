import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

// 글로벌 스테이트
export const isEditState = atom({
  key: "isEditState",
  default: false,
});
export const accessTokenState = atom({
  key: "accessTokenState",
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
export const isLoadedState = atom({
  key: "isLoadedState",
  default: true,
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
