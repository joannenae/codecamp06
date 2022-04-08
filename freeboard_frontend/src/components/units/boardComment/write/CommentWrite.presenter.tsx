import * as S from "./CommentWrite.styles";
import { ICommentWriteUIProps } from "./CommentWrite.types";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <>
      <S.CommentBox>
        {!props.isEdit && (
          <S.CommentTop>
            <S.CommentImg src="/comment.png" alt="" />
            <S.CommentHead>댓글</S.CommentHead>
          </S.CommentTop>
        )}
        <S.CommentInfo>
          <S.CommentWriter
            value={props.writer}
            placeholder="작성자"
            readOnly={!!props.el?.writer}
            defaultValue={props.el?.writer || ""}
            onChange={props.onChangeWriter}
          />
          <S.CommentPassword
            value={props.password}
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            type="password"
          />
          <S.Star value={props.star} onChange={props.onChangeStar} />
        </S.CommentInfo>
        <S.CommentHere>
          <S.CommentText
            value={props.contents}
            maxLength={100}
            defaultValue={props.el?.contents}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.CommentText>
          <S.CommentBottom>
            <S.CommentLength>{props.contents.length}/100</S.CommentLength>
            <S.CommentButton
              onClick={props.isEdit ? props.onClickUpdate : props.onClickButton}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.CommentButton>
          </S.CommentBottom>
        </S.CommentHere>
      </S.CommentBox>
    </>
  );
}
