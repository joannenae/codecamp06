import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "62675372a8255b002988ca5f" },
  });

  // 좋아요 증가 시키는 api
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    // likeBoard 함수 실행 - 백엔드로 보냄
    likeBoard({
      variables: { boardId: "62675372a8255b002988ca5f" }, // data.likeBoard
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "62675372a8255b002988ca5f" },
      //   },
      // ], // 앤 요청 두번함

      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1, // 기존거에서 더하기
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD, // 페티보드 쿼리를 조작하는 것!!!!!
          variables: { boardId: "62675372a8255b002988ca5f" },
          data: {
            fetchBoard: {
              // 필수입력사항 - 하나라도없으면 작동안함 --> 글로벌스테이트로 저장
              _id: "62675372a8255b002988ca5f",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>현제카운트(좋아요) : {data?.fetchBoard.likeCount} </div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </div>
  );
}
