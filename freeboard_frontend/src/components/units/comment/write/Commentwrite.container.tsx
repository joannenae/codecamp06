import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_COMMENT_LIST } from "../list/Commentlist.queries";
import CommentWriteUI from "./Commentwrite.presenter";
import {
  CREATE_PRODUCT_COMMENT,
  UPDATE_PRODUCT_COMMENT,
} from "./Commentwrite.queries";

export default function CommentWrite(props) {
  const router = useRouter();
  const [contents, setContents] = useState(props.el?.contents || "");
  const [createProductComment] = useMutation(CREATE_PRODUCT_COMMENT);
  const [updateProductComment] = useMutation(UPDATE_PRODUCT_COMMENT);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickComment = async () => {
    try {
      const result = await createProductComment({
        variables: {
          createUseditemQuestionInput: {
            contents: contents,
          },
          useditemId: String(router.query.marketid),
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT_LIST,
            variables: { useditemId: router.query.marketid },
          },
        ],
      });
      setContents("");
      console.log(result);
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  const onClickCommentUpdate = async () => {
    console.log(contents);
    try {
      const result = await updateProductComment({
        variables: {
          updateUseditemQuestionInput: {
            contents: contents,
          },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT_LIST,
            variables: { useditemId: router.query.marketid },
          },
        ],
      });
      setContents("");
      console.log(result);
      props.setIsEdit(false);
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  return (
    <CommentWriteUI
      onClickComment={onClickComment}
      onChangeContents={onChangeContents}
      onClickCommentUpdate={onClickCommentUpdate}
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
    />
  );
}
