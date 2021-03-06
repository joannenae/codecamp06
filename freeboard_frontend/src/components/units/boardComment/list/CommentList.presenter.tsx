import InfiniteScroll from "react-infinite-scroller";
import CommentListUIItem from "./CommentList.presenterItem";
import { ICommentListUIProps } from "./CommentList.types";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <>
      {/* <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}> */}
      {props.data?.fetchBoardComments.map((el, index) => (
        <CommentListUIItem key={index} el={el} />
      ))}
      {/* </InfiniteScroll> */}
    </>
  );
}
