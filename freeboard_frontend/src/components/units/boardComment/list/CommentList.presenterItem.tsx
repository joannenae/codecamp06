import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentList.queries";
import { ICommentListUIItemProps } from "./CommentList.types";
import * as S from "./CommentList.styles";
import CommentWrite from "../write/CommentWrite.container";

export default function CommentListUIItem(props: ICommentListUIItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardid },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickDeleteModal = () => {
    setIsDeleteModal(true);
  };

  function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }
  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {isEdit && (
        <S.Wrapper>
          <S.List>
            <S.ProfileImg src="/charic.png" />
            <S.WrapperTop>
              <S.WriterWrap>
                <S.Writer>{props.el?.writer}</S.Writer>
                <S.Star value={props.el?.rating}></S.Star>
              </S.WriterWrap>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.WrapperTop>
            <S.Option>
              <S.Update src="/edit.png" onClick={onClickUpdate} />
              <S.Delete
                src="/delete.png"
                id={props.el?._id}
                onClick={onClickDeleteModal}
              />
            </S.Option>
          </S.List>
          <S.Date>{props.el?.createdAt}</S.Date>
        </S.Wrapper>
      )}
      {isEdit && (
        <CommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
