import * as S from "./LogIn.styles";
import { ILogInUIProps } from "./LogIn.types";

export default function LogInUI(props: ILogInUIProps) {
  return (
    <S.Wr>
      <S.Wrin>
        <S.Logo>Second Hand Market</S.Logo>
        <S.Email
          type="text"
          placeholder="이메일"
          onChange={props.onChangeEmail}
        ></S.Email>
        <S.Error>{props.emailError}</S.Error>
        <S.Password
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        ></S.Password>
        <S.Error>{props.passwordError}</S.Error>
        <S.LoginCheck>
          <S.Check src="/check.png"></S.Check>
          <S.LoginText>로그인 상태 유지</S.LoginText>
        </S.LoginCheck>
        <S.LoginSubmit onClick={props.onClickLogIn}>로그인</S.LoginSubmit>
        <S.Join>화원가입</S.Join>
        <S.Find>
          <S.FindEmail>이메일 찾기</S.FindEmail>
          <S.FindPassword>비밀번호 찾기</S.FindPassword>
        </S.Find>
      </S.Wrin>
    </S.Wr>
  );
}
