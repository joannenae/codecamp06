import { useRouter } from "next/router";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentList from "../../../src/components/units/boardComment/list/CommentList.container";
import CommentWrite from "../../../src/components/units/boardComment/write/CommentWrite.container";

export default function BoardDetailPage() {
  const router = useRouter();
  return (
    <div>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
    </div>
  );
}
