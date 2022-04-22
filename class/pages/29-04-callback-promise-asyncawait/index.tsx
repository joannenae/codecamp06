import axios from "axios";

export default function CallbackPromiseAsyncawaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200"); // rest api 주소 - 랜덤숫자
    aaa.send();
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]; // 131 (랜덤숫자)

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const UserId = res.target.response.UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${UserId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(res); // 최종 결과값!
        });
      });
    }); // 인자로 함수가 들어감 - 콜백함수
  };

  // new Promise().then().catch(); // Promise에서 성공하면 then , 실패하면 catch
  // new Promise((resolve, reject) => {
  //   // 외부 요청 코드

  //   // 성공
  //   resolve("철수");

  //   // 실패
  //   reject("에러발생");
  // })
  //   .then((res) => {})
  //   .catch((err) => {});

  const onClickPromise = () => {
    console.log("1번");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("2번");
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("3번");
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts/${userId}`);
      })
      .then((res) => {
        console.log("4번");
        console.log("최종 결과 !!");
      });
    console.log("5번");
  }; // 콜백함수에서 발생하는 문제를 promise chaining - 프로미스 체이닝

  const onClickAsyncawait = async () => {
    // promise를 기다릴 때(return) 쓰는게 await
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      <button onClick={onClickPromise}>Promise 요청하기</button>
      <button onClick={onClickAsyncawait}>Asyncawait 요청하기</button>
    </div>
  );
}
