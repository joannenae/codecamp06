import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
//----------------------------------------------------- 원래 gql에서 타입을 보고 다 지정을 해주었지만 이제는 아예 파일을 다운밥음 > 거기서 가져온것
export default function BoardDetail() {
  const router = useRouter();
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardid) } }
  );
  //------------------------------------------------

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardid}/edit`); //폴더명
  };
  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardid) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardid } },
      ],
    });
  };

  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardid) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardid } },
      ],
    });
  };

  //----------------------------------------------------------------

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
