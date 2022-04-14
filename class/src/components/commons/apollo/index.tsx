import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { useEffect } from "react";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // 1. --------------------------더 이상 지원 안됨
  // if (process.browser) {
  // } else {
  // }
  // 2. ----------------------------두번 째 방법
  if (typeof window === "undefined") {
    console.log("여기는 브라우저");
  } else {
    console.log("여기는 프론트엔드 서버");
  }
  // 3.------------------------------세번 째 방법
  useEffect(() => {
    const mylocalstorageAccessToken = localStorage.getItem("accessToken");
    setAccessToken(mylocalstorageAccessToken || "");
  });
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
