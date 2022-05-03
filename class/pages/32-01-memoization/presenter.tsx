import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링 됩니다");
  return (
    <div>
      <div>===============================</div>
      <h1>이것은 프리젠터입니다</h1>
      <div>===============================</div>
    </div>
  );
}
// HOC라고 할 수 있다
// 자식까지 다시 그리지 않게됨 (container만 렌더링)
export default memo(MemoizationPresenterPage);
