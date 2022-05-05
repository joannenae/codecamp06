import { useMutation } from "@apollo/client/react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import CommentWrite from "../write/Commentwrite.container";
import { DELETE_COMMENT_LIST, FETCH_COMMENT_LIST } from "./Commentlist.queries";
import * as S from "./Commentlist.styles";

export default function CommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteQuestion] = useMutation(DELETE_COMMENT_LIST);

  const onClickDelete = async () => {
    try {
      await deleteQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT_LIST,
            variables: { useditemId: router.query.marketid },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit && (
        <S.Wrapper>
          <S.List>
            <S.ProfileImg src="/charic.png" />
            <S.WrapperTop>
              <S.WriterWrap>
                <S.Writer>{props.el?.writer}</S.Writer>
              </S.WriterWrap>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.WrapperTop>
            <S.Option>
              <S.Update src="/edit.png" onClick={onClickUpdate} />
              <S.Delete
                src="/delete.png"
                id={props.el?._id}
                onClick={onClickDelete}
              />
            </S.Option>
          </S.List>
          <S.Date>{props.el?.createdAt}</S.Date>
        </S.Wrapper>
      )}
      {isEdit && (
        <CommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </div>
  );
}
