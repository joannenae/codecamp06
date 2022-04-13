import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>현재 카운트: {count} </div>
      <button onClick={onClickCounter}>누르세요</button>
    </div>
  );
}
