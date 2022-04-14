import { ChangeEvent, useState } from "react";
import JoinUI from "./Join.presenter";

export default function JoinPage() {
  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordright, setPasswordright] = useState("");
  const [passwordcheck, setPasswordCheck] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordcheckError, setPasswordCheckError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (
      event.target.value !== "/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/"
    ) {
      setEmailError("");
    }

    if (event.target.value && name && password && passwordcheck) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
    if (email && event.target.value && password && passwordcheck) {
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

    if (email && name && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value === password);
    setPasswordright(event.target.value);
    if (event.target.value === password) {
      setPasswordCheckError("");
    }
    if (email && name && password && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickJoin = async () => {
    if (email !== "/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/") {
      setEmailError("올바르지 않은 이메일 형식입니다.");
      //  '계정@도메인.최상위도메인'
    }
    if (name === "") {
      setNameError("이름을 입력하세요.");
    }
    if (
      password !==
      "/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/"
      // 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 :
    ) {
      setPasswordError(
        "영문, 숫자, 특수문자 혼합하여 8~20자리 이내의 비밀번호를 입력해주세요."
      );
    }
    if (!passwordcheck && passwordright) {
      setPasswordCheckError("비밀번호가 다릅니다.");
    }
    if (
      email !== "/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/" &&
      name !== "" &&
      password !==
        "/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/" &&
      !passwordcheck
    ) {
    }
  };
  return (
    <>
      <JoinUI
        isActive={isActive}
        emailError={emailError}
        nameError={nameError}
        passwordError={passwordError}
        passwordcheckError={passwordcheckError}
        onChangeEmail={onChangeEmail}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangePasswordCheck={onChangePasswordCheck}
        onClickJoin={onClickJoin}
      />
    </>
  );
}
