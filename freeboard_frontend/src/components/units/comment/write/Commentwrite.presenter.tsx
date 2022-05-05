import * as S from "./Commentwrite.styles";

export default function CommentriteUI(props) {
  return (
    <S.Wrapper>
      {!props.isEdit && (
        <S.CommentTop>
          <S.CommentImg src="/comment.png" alt="" />
          <S.CommentHead>댓글</S.CommentHead>
        </S.CommentTop>
      )}

      <S.InputWrapper></S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          // maxLength={100}
          // defaultValue={props.contents}
          value={props.contents}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.BottomWrapper>
          <S.ContentsLength>
            {/* {props.contents.length} */}
            /100
          </S.ContentsLength>
          <S.Button
            onClick={
              props.isEdit ? props.onClickCommentUpdate : props.onClickComment
            }
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
