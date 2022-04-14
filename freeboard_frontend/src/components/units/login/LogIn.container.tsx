import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import LogInUI from "./LogIn.presenter";

export default function LogInPage() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (
      event.target.value !== "/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/"
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
      event.target.value !==
      "/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/"
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
    if (email === "") {
      setEmailError("올바르지 않은 이메일 형식입니다.");
    }
    if (password === "") {
      setPasswordError(
        "영문, 숫자, 특수문자 혼합하여 8~20자리 이내의 비밀번호를 입력해주세요."
      );
    }
    if (
      email !== "/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/" &&
      password !==
        "/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/"
    ) {
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
