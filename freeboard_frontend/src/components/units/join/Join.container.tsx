import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import JoinUI from "./Join.presenter";
import { CREATE_USER } from "./Join.queries";

export default function JoinPage() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

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
      setEmailError("???????????? ?????? ????????? ???????????????.");
    } else {
      setEmailError("");
    }
    if (name === "") {
      setNameError("????????? ???????????????.");
    }
    if (
      !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
        password
      )
      // ?????? 8 ???, ?????? ????????? ??????, ????????? ?????? ??? ????????? ?????? ??????
    ) {
      setPasswordError(
        "??????, ??????, ???????????? ???????????? 8~20?????? ????????? ??????????????? ??????????????????."
      );
    } else {
      setPassword("");
    }
    if (!passwordcheck) {
      setPasswordCheckError("??????????????? ????????????.");
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
        alert("??????????????? ?????????????????????!");
        router.push("/login");
      } catch (error) {
        alert("??????????????? ?????????????????????.");
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
