import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

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

export default function WebEditorDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <div>
      <div style={{ color: "red" }}>작성자 : {data?.fetchBoard.writer}</div>
      <div style={{ color: "green" }}>제목 : {data?.fetchBoard.title}</div>
      {/* 태그로 인식하게끔 */}
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        <div style={{ color: "blue" }}></div> // hydration 때문에 갯수를 맞춰주기 위함
      )}
      <div style={{ color: "brown" }}>상품가격 : </div>
    </div>
  );
}
// 상세
