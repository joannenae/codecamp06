import { useMovetoPage } from "../../../commons/hooks/movepage";
import LoginPresenter from "./login.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import axios from "axios";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRouter } from "next/router";

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 형식이 적합하지 않습니다."
    )
    .required("이메일은 필수 입력 사항 입니다."),
  pw: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리~16자리입니다."
    )
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function LoginContainer() {
  const { onClickMoveToPage } = useMovetoPage();
  const router = useRouter();

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data) => {
    if (data.email && data.pw) {
      try {
        await axios(
          {
            method: "POST",
            url: "/v1/account/login",
            params: {
              email: data.email,
              password: data.pw,
            },
          },
          // cors 에러 - 프론트에서 axios요청할 때, withCredentials부분을 true로 해서 수동으로 CORS 요청에 쿠키값을 넣어줘야 한다.
          { withCredentials: true }
        ).then((response) => {
          console.log(response);
          const accessToken = response.data.access_token;
          const refreshToken = response.data.refresh_token;

          if (response.data.result_status === 200) {
            if (accessToken) {
              axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            }

            if (refreshToken) {
              axios.defaults.headers.common.refreshToken = `Bearer ${refreshToken}`;
            }

            setAccessToken(accessToken || "");

            localStorage.setItem("accessToken", accessToken);

            setUserInfo(response.data);

            Modal.success({ content: "로그인에 성공하였습니다" });
            router.push(`/boards`);
          }

          if (response.data.result_status === 300) {
            Modal.error({ content: "로그인 정보가 존재하지 않습니다." });
          }
          if (response.data.message === "로그인 권한이 없습니다.") {
            Modal.error({ content: "로그인 권한이 없습니다." });
          }
        });
      } catch (error) {
        console.log(error);
        Modal.error({ content: "로그인에 실패하였습니다." });
      }
    }
  };
  return (
    <LoginPresenter
      onClickMoveToPage={onClickMoveToPage}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}
