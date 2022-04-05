import { useEffect, useRef, useState } from "react";
import useRouter from "next/router";

// interface Istate {
//   count: number;
// }

export default function CounterPage() {
  const router = useRouter;

  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  // 1. DidMount
  // componentDidMount() {
  //   console.log("마운트됨");
  //   this.inputRef.current?.focus();
  //   // 포커스 깜빡깜빡
  // }
  // useEffect(() => {
  //   console.log("마운트 됨 !")
  //   inputRef.current?.focus();
  // }, [])

  // 2. DidUpdate
  // componentDidUpdate() {
  //   console.log("수정되고 다시 그려짐"); // 카운더가 진행되면 계속 진행
  // }
  useEffect(() => {
    console.log("수정되고 다시그려짐 !");
  }, [count]);

  // 3. WillUnmount
  // componentWillUnmount() {
  //   console.log("컴포넌트 사리짐");
  //   // 채팅방 나가기
  //   // api 요청 !!
  // }
  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트가 사라짐")
  //   }
  // }, [])

  // 4. DidMount 와 WillUnmount를 합치기 !!
  useEffect(() => {
    console.log("마운트 됨 !");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐");
    };
  }, []);

  // 5. useEffect 의 잘못된 사용 예(1. 추가 렌더링 - setState 가급적 피하기 - 불필요한 렌더링 발생 >>>> 2. 무한루프 )
  // useEffect(() => {
  //   setCount(10);
  // }, []);

  const onClickCounter = () => {
    // console.log(this.state.count);
    // this.setState((prev: Istate) => ({
    //   count: prev.count + 1,
    // }));
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게 ?"); // useEffect 가 실행되고 난 후

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재 카운트: {count} </div>
      <button onClick={onClickCounter}>카운트 올리기 ~</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
