import { useQuery, gql } from "@apollo/client";
import { withAuth } from "../../../src/components/commons/example/hoc/withAuth";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function MainPage() {
  // const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   // 토큰이 없다면
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용 가능합니다");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>;
}

export default withAuth(MainPage);
