import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (!accessToken) {
      router.push("/27-01-login");
      alert("로그인을 먼저 해주세요");
    }
  }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>;
}
