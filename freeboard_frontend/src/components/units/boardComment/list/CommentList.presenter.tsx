import * as S from "./CommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { ICommentListUIProps } from "./CommentList.types";
import { Modal } from "antd";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <>
      {props.isOpenDeleteModal && (
        <Modal visible={true} onOk={props.onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </Modal>
      )}
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
              <S.Delete
                src="/delete.png"
                id={el._id}
                onClick={props.onClickDeleteModal}
              />
            </S.Option>
          </S.List>
          <S.Date>{getDate(el.createdAt)}</S.Date>
        </S.Wrapper>
      ))}
    </>
  );
}
