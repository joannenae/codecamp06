import * as S from "./signup.styles";
import { ISignupProps } from "./signup.types";

export default function SignupUI(props: ISignupProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSingup)}>
      <S.Wrapper>
        <S.Header>
          <S.KoLogin>회원가입</S.KoLogin>
          <S.EnLogin>Sign up</S.EnLogin>
        </S.Header>
        <S.RowWrap>
          <S.Label>아이디</S.Label>
          <S.Input
            placeholder="이메일아이디를 입력해주세요"
            type="text"
            {...props.register("email")}
          />
        </S.RowWrap>
        <S.InputEr>{props.formState.errors.email?.message}</S.InputEr>
        <S.RowWrap>
          <S.Label>비밀번호</S.Label>
          <S.Input
            placeholder="비밀번호를 입력해주세요"
            type="password"
            {...props.register("password")}
          />
        </S.RowWrap>
        <S.InputEr>{props.formState.errors.password?.message}</S.InputEr>
        <S.RowWrap>
          <S.Label>비밀번호 확인</S.Label>

          <S.Input
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            {...props.register("passwordCheck")}
          />
        </S.RowWrap>
        <S.InputEr>{props.formState.errors.password?.message}</S.InputEr>
        <S.RowWrap>
          <S.Label>이름</S.Label>
          <S.Input
            placeholder="이름을 입력해주세요"
            type="text"
            {...props.register("name")}
          />
        </S.RowWrap>
        <S.InputEr>{props.formState.errors.name?.message}</S.InputEr>
        <S.RowWrap>
          <S.Btn type="submit">회원가입하기</S.Btn>
          <S.Cancle type="button" onClick={props.onClickCancle}>
            취소하기
          </S.Cancle>
        </S.RowWrap>
        <S.Footer>
          <S.Que>이미 아이디가 있으신가요?</S.Que>
          <S.Sing onClick={props.onClickGoLogin}>로그인하기</S.Sing>
        </S.Footer>
      </S.Wrapper>
    </form>
  );
}
