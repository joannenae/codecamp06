import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { useEffect } from "react";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  useEffect(() => {
    const AccessToken = localStorage.getItem("accessToken"); // 로컬스토리지에서 정보 뽑아서
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}"); // userInfo가 있으면 userInfo문자열을 객체로 바꿔주고 없으면 빈 객체가 들어있는 문자열을 객체로 바꿔줘.
    setAccessToken(AccessToken || ""); // 글로벌 스테이트에 저장해주기
    setUserInfo(userInfo);
  }, []);
  // --------------------------프리렌더링시 문제 되는 코드
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: ` Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
