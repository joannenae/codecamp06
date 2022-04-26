import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  // 1. --------------------------더 이상 지원 안됨
  // if (process.browser) {
  // } else {
  // }
  // 2. ----------------------------두번 째 방법
  if (typeof window !== "undefined") {
    console.log("여기는 브라우저");
  } else {
    console.log("여기는 프론트엔드 서버");
  }
  // 3.------------------------------세번 째 방법
  useEffect(() => {
    // 옛날방식
    // const AccessToken = localStorage.getItem("accessToken"); // 로컬스토리지에서 정보 뽑아서
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}"); // userInfo가 있으면 userInfo문자열을 객체로 바꿔주고 없으면 빈 객체가 들어있는 문자열을 객체로 바꿔줘.
    // setAccessToken(AccessToken || ""); // 글로벌 스테이트에 저장해주기
    // setUserInfo(userInfo);

    // accessToken 재발급해서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);
  // --------------------------프리렌더링시 문제 되는 코드
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰 만료인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 정보받기
            setAccessToken(newAccessToken);
            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청 하기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });
            // 3-2. 변경한 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: ` Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
