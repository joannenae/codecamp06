import { useEffect, useRef, useState } from "react";
import useRouter from "next/router";

export default function CounterPage() {
  const router = useRouter;

  const inputRef = useRef<HTMLInputElement>(null);
  const [isChange, setIschange] = useState(false);

  const onClickChange = () => {
    setIschange(true);
  };

  useEffect(() => {
    if (isChange === false) alert("rendered!!");
    if (isChange === true) alert("changed");
    inputRef.current?.focus();
  }, [isChange]);

  const onClickMove = () => {
    router.push("/");
  };

  useEffect(() => {
    console.log("마운트 됨 !");

    return () => {
      console.log("컴포넌트 사라짐");
      alert("Bye!!");
    };
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </div>
  );
}
