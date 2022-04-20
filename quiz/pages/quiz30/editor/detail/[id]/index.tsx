import DOMPurify from "dompurify";

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function EditorDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <div>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      )}
    </div>
  );
}
