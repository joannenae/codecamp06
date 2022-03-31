import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentList.queries";

export default function CommentList() {
  const router = useRouter();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardid) },
  });
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: deleteId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardid },
          },
        ],
      });
      setIsOpenDeleteModal(false);
      setDeleteId("");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  function onClickOpenDeleteModal(event: MouseEvent<HTMLImageElement>) {
    setIsOpenDeleteModal(true);
    if (event.target instanceof Element) setDeleteId(event.target.id);
  }

  function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  return (
    <CommentListUI
      data={data}
      onClickDeleteModal={onClickOpenDeleteModal}
      isOpenDeleteModal={isOpenDeleteModal}
      onClickDelete={onClickDelete}
      onChangeDeletePassword={onChangeDeletePassword}
    />
  );
}
