import { ChangeEvent, useState } from "react";
import LogInUI from "./LogIn.presenter";
import { ILogInPageProps } from "./LogIn.types";

export default function LogInPage(props: ILogInPageProps) {
  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
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
    if (event.target.value !== "") {
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
      setEmailError("이메일을 입력하세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력하세요");
    }
    if (email !== "" && password !== "") {
    }
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
      />
      ;
    </>
  );
}
