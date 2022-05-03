import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다");

  let countLet = 0;
  const [countState, SetCountState] = useState(0);

  // const aaa = Math.random(); // 다시 실행하면 랜덤숫자도 바뀜
  const aaa = useMemo(() => Math.random(), []); // 다시 실행하면 랜덤숫자가 바뀌지 않도록 - 의존성배열에 넣으면 특정케이스에 다시 만들어지게 됨
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1
  }, []);

  // const onClickCountState = useCallback(() => {
  //   // console.log(countState + 1);
  //   // SetCountState(countState + 1);  state까지 같이 memo를 해버려서 렌더가 아예 안됨 (잘못된 예 - 직접적인 state사용 자제)
  //   SetCountState((prev) => prev + 1); // 기존값 가져오기
  // }, []);

  // useMemo로 useCallback 만들어보기
  const onClickCountState = useMemo(() => {
    return () => {
      SetCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <div>==============================</div>
      <h1>이것은 컨테이너입니다</h1>

      <div>카운트(let) : {countLet} </div>
      <button onClick={onClickCountLet}>카운트(let) + 1 올리기</button>

      {/* 부모가 렌더링되면서 자식까지 렌더링이 된다(새롭게 만들어짐) */}
      <div>카운트(state) : {countState} </div>
      <button onClick={onClickCountState}>카운트(state) + 1 올리기</button>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
