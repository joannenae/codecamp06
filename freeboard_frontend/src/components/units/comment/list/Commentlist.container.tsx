import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_COMMENT_LIST } from "./Commentlist.queries";
import CommentListUI from "./Commentlist.presenter";

export default function CommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_COMMENT_LIST, {
    variables: { useditemId: String(router.query.marketid) },
  });
  return <CommentListUI data={data} />;
}
