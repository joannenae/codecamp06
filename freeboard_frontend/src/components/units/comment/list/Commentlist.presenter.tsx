import { Fragment } from "react";

import { v4 as uuidv4 } from "uuid";
import CommentListUIItem from "./Commentlist.presenteritem";

export default function CommentListUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <CommentListUIItem key={String(uuidv4())} el={el} />
      ))}
    </>
  );
}
