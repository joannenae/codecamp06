import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  const { onClickMoveToPage } = useMoveToPage();
  // useMoveToPage는 customHook
  // 페이지 이동할 때 이것만 쓰면 됨 - commons/hooks/useMoveToPage참고

  return (
    <div>
      {/* HOC 이용 */}
      <button onClick={onClickMoveToPage("/board")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
    </div>
  );
}
