import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";
// customHook
// 25-02 폴더 참고
export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState); // store > index.tsx - 글로벌스테이트 import

  const onClickMoveToPage = (path: any) => () => {
    setVisitedPage(path); // path 저장하고
    router.push(path); // 이동하기
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
}
//
