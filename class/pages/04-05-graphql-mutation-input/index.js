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
  const [mywriter, setMyWriter] = useState("");
  const [mytitle, setMyTitle] = useState("");
  const [mycontents, setMyContents] = useState("");

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식

    const result = await callApi({
      variables: { writer: mywriter, title: mytitle, contents: mycontents },
    }); // graphql - api 방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  // 이벤트 핸들러 함수
  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setMyContents(event.target.value);
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자 : <input type="text" onChange={onChangeWriter} /> <br />
      제목 : <input type="text" onChange={onChangeTitle} /> <br />
      내용 : <input type="text" onChange={onChangeContents} /> <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기 !!!</button>
    </div>
  );
}
