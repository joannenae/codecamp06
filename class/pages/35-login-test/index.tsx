import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";
import LoginSuccessPage from "../22-02-login-success";

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    alert("로그인 되었습니다");
    router.push("/36-login");
  };

  return (
    <>
      <div>
        이메일: <input type="text" />
        <br />
        <button onClick={onClickLogin} email={email}>
          로그인
        </button>
      </div>
    </>
  );
}
