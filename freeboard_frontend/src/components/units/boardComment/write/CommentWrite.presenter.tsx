import * as S from "./CommentWrite.styles";
import { ICommentWriteUIProps } from "./CommentWrite.types";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <>
      <S.CommentBox>
        <S.CommentTop>
          <S.CommentImg src="/comment.png" alt="" />
          <S.CommentHead>댓글</S.CommentHead>
        </S.CommentTop>
        <S.CommentInfo>
          <S.CommentWriter
            placeholder="작성자"
            onChange={props.onChangeWriter}
          />
          <S.CommentPassword
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <S.Star onChange={props.handleChange} value={props.value} />
        </S.CommentInfo>
        <S.CommentHere>
          <S.CommentText
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.CommentText>
          <S.CommentBottom>
            <S.CommentLength>{props.contents.length}/100</S.CommentLength>
            <S.CommentButton onClick={props.onClickButton}>
              등록하기
            </S.CommentButton>
          </S.CommentBottom>
        </S.CommentHere>
      </S.CommentBox>
    </>
  );
}
