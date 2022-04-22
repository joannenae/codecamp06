import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LogInUI from "./LogIn.presenter";
import { LOGIN_USER } from "./LogIn.queries";

export default function LogInPage() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        event.target.value
      )
    ) {
      setEmailError("");
    }

    if (event.target.value && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
        event.target.value
      )
    ) {
      setPasswordError("");
    }

    if (email && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickLogIn = async () => {
    if (
      !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        email
      )
    ) {
      setEmailError("올바르지 않은 이메일 형식입니다.");
    } else {
      setEmailError("");
    }
    if (
      !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
        password
      )
      // 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
    ) {
      setPasswordError(
        "영문, 숫자, 특수문자 혼합하여 8~20자리 이내의 비밀번호를 입력해주세요."
      );
    } else {
      setPassword("");
    }
    if (
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        email
      ) &&
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
        password
      )
    ) {
      try {
        const result = await loginUser({
          variables: {
            email,
            password,
          },
        });
        const accessToken = result.data.loginUser.accessToken;
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
        alert("로그인에 성공하였습니다.");
        router.push("/");
      } catch (error) {
        alert("로그인에 실패하였습니다.");
      }
    }
  };

  const onClickToJoin = () => {
    router.push(`/join`);
  };

  return (
    <>
      <LogInUI
        isActive={isActive}
        emailError={emailError}
        passwordError={passwordError}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogIn={onClickLogIn}
        onClickToJoin={onClickToJoin}
      />
      ;
    </>
  );
}
