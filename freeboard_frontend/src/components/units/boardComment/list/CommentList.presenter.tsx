import * as S from "./CommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { ICommentListUIProps } from "./CommentList.types";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el: any) => (
        <S.Wrapper key={el._id}>
          <S.List>
            <S.ProfileImg src="/charic.png" />
            <S.WrapperTop>
              <S.WriterWrap>
                <S.Writer>{el.writer}</S.Writer>
                <S.Star value={el.rating}></S.Star>
              </S.WriterWrap>
              <S.Contents>{el.contents}</S.Contents>
            </S.WrapperTop>
            <S.Option>
              <S.Update src="/edit.png" />
              <S.Delete src="/delete.png" />
            </S.Option>
          </S.List>
          <S.Date>{getDate(el.createdAt)}</S.Date>
        </S.Wrapper>
      ))}
    </>
  );
}
