import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import JoinUI from "./Join.presenter";
import { CREATE_USER } from "./Join.queries";

export default function JoinPage() {
  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [, setPasswordright] = useState("");
  const [passwordcheck, setPasswordCheck] = useState(false);
  const [createUser] = useMutation(CREATE_USER);

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordcheckError, setPasswordCheckError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        event.target.value
      )
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
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
        event.target.value
      )
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
    if (
      !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        email
      )
    ) {
      setEmailError("올바르지 않은 이메일 형식입니다.");
    } else {
      setEmailError("");
    }
    if (name === "") {
      setNameError("이름을 입력하세요.");
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
    if (!passwordcheck) {
      setPasswordCheckError("비밀번호가 다릅니다.");
    }
    if (
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        email
      ) &&
      name !== "" &&
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
        password
      ) &&
      passwordcheck
    ) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email,
              name,
              password,
            },
          },
        });
        console.log(result);
        alert("회원가입에 성공하였습니다!");
      } catch (error) {
        alert("회원가입에 실패하였습니다.");
      }
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
