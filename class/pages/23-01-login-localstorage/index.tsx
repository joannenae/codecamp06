import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken); // 글로벌스테이트
    localStorage.setItem("accessToken", accessToken); // accessToken 이 보이는지
    console.log(accessToken);
    alert("로그인 되었습니다");
    router.push("/23-02-login-localstorage-success"); // 자동으로 페이지가 이동이 되는지
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
