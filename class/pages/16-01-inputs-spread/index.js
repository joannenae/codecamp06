import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
// import axios from 'axios'

// playground에서 제시 되어있는 아래 값을 가져오고 > 이것을 담을 그릇 >

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphulMutationPage() {
  // const [mywriter, setMyWriter] = useState("");
  // const [mytitle, setMyTitle] = useState("");
  // const [mycontents, setMyContents] = useState("");

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식

    const result = await callApi({
      variables: {
        // writer: inputs.writer,
        // title: inputs.title,
        // contents: inputs.contents, > 하나로 묶기
        ...inputs,
      },
    }); // graphql - api 방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  // 이벤트 핸들러 함수
  const onChangeInputs = (event) => {
    // setMyWriter(event.target.value);
    setInputs({
      // writer: event.target.value,
      // title: inputs.title,
      // contents: inputs.contents,
      ...inputs, // 스프레드 연산자 사용해서 하나로
      [event.target.id]: event.target.value, //  키로 바꿔주기
    });
  };

  // -------------------- 3개 함수를 위 처럼 하나로 만들어 준 것 04-05 비교해보시옹 / 아래는 확장 불가능 항상 추가해야하기 때문에 위 처럼 만들어줄 것 - 스프레드 연산자로 리팩토링 한 것
  // const onChangeTitle = (event) => {
  //   // setMyTitle(event.target.value);
  //   setInputs({
  //     // writer: inputs.writer,
  //     // title: event.target.value,
  //     // contents: inputs.contents,
  //     ...inputs, // 스프레드 연산자 사용해서 하나로
  //     [event.target.id]: event.target.value, //  키로 바꿔주기
  //   });
  // };
  // const onChangeContents = (event) => {
  //   // setMyContents(event.target.value);
  //   setInputs({
  //     // writer: inputs.writer,
  //     // title: inputs.title,
  //     // contents: event.target.value,
  //     ...inputs, // 스프레드 연산자 사용해서 하나로
  //     [event.target.id]: event.target.value, //  키로 바꿔주기
  //   });
  // };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기 !!!</button>
    </div>
  );
}
