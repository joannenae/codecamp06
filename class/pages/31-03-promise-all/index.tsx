export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("Promise 시작");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog1.jpeg"); // 실행 끝
      }, 3000); // 3초 동안 기다리기
    });
    console.log(result1);
    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpeg"); // 실행 끝
      }, 2000); // 2초 동안 기다리기
    });
    console.log(result2);
    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpeg"); // 실행 끝
      }, 1000); // 1초 동안 기다리기
    });
    console.log(result3);
    console.timeEnd("Promise 시작");
  };

  const onClickPromiseAll = async () => {
    // 1. 하나하나씩 확인 하는 방법
    // console.time("PromiseAll 시작");
    // const result = await Promise.all([
    //   // 3개가 모두 끝날때까지 기다리기
    //   // result에는 배열형태로 dog1 , dog2 , dog3이 담긴다
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpeg"); // 실행 끝
    //     }, 3000); // 3초 동안 기다리기
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpeg"); // 실행 끝
    //     }, 2000); // 2초 동안 기다리기
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpeg"); // 실행 끝
    //     }, 1000); // 1초 동안 기다리기
    //   }),
    // ]);
    // console.log(result);
    // console.timeEnd("PromiseAll 시작");

    // 2. 한번에 확인하는 방법
    console.time("PromiseAll 시작");
    const result = await Promise.all(
      ["https://dog1.jpeg", "https://dog2.jpeg", "https://dog3.jpeg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el); // 실행 끝
            }, 3000); // 3초 동안 기다리기
          })
      )
    );
    console.log(result);
    console.timeEnd("PromiseAll 시작");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습</button>
      <button onClick={onClickPromiseAll}>Promise All 연습</button>
    </div>
  );
}
