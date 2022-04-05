import { useEffect, useRef, useState } from "react";
import useRouter from "next/router";

export default function CounterPage() {
  const router = useRouter;

  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("수정되고 다시그려짐 !");
  }, [count]);

  useEffect(() => {
    console.log("마운트 됨 !");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐");
    };
  }, []);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("마운트 시작"); // useEffect 가 실행되고 난 후

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재 카운트: {count} </div>
      <button onClick={onClickCounter}>카운트 올리기 ~</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
