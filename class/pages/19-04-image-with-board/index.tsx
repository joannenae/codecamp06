import { useState, useRef, ChangeEvent } from "react";
import { useMutation, gql } from "@apollo/client";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";
// import axios from 'axios'

// playground에서 제시 되어있는 아래 값을 가져오고 > 이것을 담을 그릇 >

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphulMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [data, setData] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: imageUrl,
        },
      },
    }); // graphql - api 방식
    // console.log(result);
    // console.log(result.data.createBoard.message);
    console.log(data);
    setData(result.data.createBoard.message);
  };

  // 이벤트 핸들러 함수
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    // 이미지 검증하기 (검증 부분이 false일 경우 - validation.ts 확인)
    const isValid = checkFileValidation(file);
    if (!isValid) return;

    // 이미지 업로드 (위 검증 부분이 true일 경우)
    try {
      const result = await uploadFile({ variables: { file } });
      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자 : <input type="text" onChange={onChangeWriter} /> <br />
      비밀번호 : <input type="text" onChange={onChangePassword} /> <br />
      제목 : <input type="text" onChange={onChangeTitle} /> <br />
      내용 : <input type="text" onChange={onChangeContents} /> <br />
      <div>
        <div>이미지 업로드 연습하기 !!</div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "gray",
            cursor: "pointer",
          }}
          onClick={onClickImage}
        >
          이미지선택
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />
        <img src={`https://storage.googleapis.com/${imageUrl}`} alt="" />
      </div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기 !!!</button>
    </div>
  );
}
