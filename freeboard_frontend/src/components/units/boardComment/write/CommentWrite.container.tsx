import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import CommentWriteUI from "./CommentWrite.presenter";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";

export default function CommentWrite() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setValue] = useState(3);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const handleChange = (value: number) => {
    setValue(value);
  };

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
  }

  async function onClickButton() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: value,
          },
          boardId: String(router.query.boardid),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardid },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <CommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickButton={onClickButton}
      contents={contents}
      handleChange={handleChange}
      value={value}
    />
  );
}
