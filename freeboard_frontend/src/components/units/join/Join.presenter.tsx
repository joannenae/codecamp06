import * as S from "./Join.styles";
import { IJoinUIProps } from "./Join.types";

export default function JoinUI(props: IJoinUIProps) {
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
        <S.Name
          type="text"
          placeholder="이름"
          onChange={props.onChangeName}
        ></S.Name>
        <S.Error>{props.nameError}</S.Error>
        <S.Password
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        ></S.Password>
        <S.Error>{props.passwordError}</S.Error>
        <S.Password
          type="password"
          placeholder="비밀번호 확인"
          onChange={props.onChangePasswordCheck}
        ></S.Password>
        <S.Error>{props.passwordcheckError}</S.Error>
        <S.Join onClick={props.onClickJoin}>화원가입</S.Join>
      </S.Wrin>
    </S.Wr>
  );
}
