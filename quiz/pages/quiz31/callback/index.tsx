import axios from "axios";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CallbackPromiseAsyncPage() {
  const [isCallBack, setIsCallBack] = useState([]);
  const [isPromise, setIsPromise] = useState([]);
  const [isAsync, setIsAsync] = useState([]);

  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]; // 랜덤숫자
      console.log(num);
      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const userId = JSON.parse(res.target.response).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          setIsCallBack(JSON.parse(res.target.response));
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        console.log(num);

        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res);
        setIsPromise(res.data);
      });
  };

  // // 순서가 명확하다
  const onClickAsync = async () => {
    const numData = await axios.get(
      "http://numbersapi.com/random?min=1&max=200"
    );
    const postsData = await axios.get(
      `http://koreanjson.com/posts/${numData.data.split(" ")[0]}`
    );

    const userPost = await axios.get(
      `http://koreanjson.com/posts?userId=${postsData.data.UserId}`
    );
    setIsAsync(userPost.data);
  };

  // {props.data?.fetchUseditems.map((el) => (
  //   <Fragment key={String(uuidv4())}>
  //     <ProductListItemUI el={el} />
  //   </Fragment>
  // ))}

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      {isCallBack?.map((el) => (
        <Fragment key={String(uuidv4())}>
          <div>title : {el.title}</div>
        </Fragment>
      ))}

      <button onClick={onClickPromise}>Promise 요청하기</button>
      {isPromise?.map((el) => (
        <Fragment key={String(uuidv4())}>
          <div>title : {el.title}</div>
        </Fragment>
      ))}
      <button onClick={onClickAsync}>Async 요청하기</button>
      {isAsync?.map((el) => (
        <Fragment key={String(uuidv4())}>
          <div>title : {el.title}</div>
        </Fragment>
      ))}
    </div>
  );
}
