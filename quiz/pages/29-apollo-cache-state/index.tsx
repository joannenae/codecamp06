import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

// -------------------------------------- style
const Wr = styled.div`
  border-bottom: 1px solid lightgray;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// const Input = styled.input`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
const Span = styled.span``;
const Delete = styled.div`
  width: 100px;
  background-color: lightgray;
  text-align: center;

  cursor: pointer;
`;
const Create = styled.div`
  width: 200px;
  height: 50px;
  line-height: 50px;
  background-color: lightpink;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 5px;

  cursor: pointer;
`;

const Div = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  /* display: flex;
  width: 200px;
  margin-top: 50px; */
`;
// --------------------------------------

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

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

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
    password: "",
  });

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickDelete = (boardId: string) => async () => {
    // 가장 가까운 괄호 앞에 async 써주기
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard; // 배열 안에 10개의 객체에서 이 아이디와 같은 것만 삭제하기
        cache.modify({
          fields: {
            // prev는 배열 안에 기존 10개의 객체
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId // el._id가 안되므로 , readfield에서 꺼내기 - cache에서는 el._id가 읽히지않게 설정이 되어있음 외우기
              );
              return [...filteredPrev]; // 기존 10개에서 아이디같은 것만 뺀 = 총 9개
            },
          }, // 어떤 필드 수정할래
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          // writer,
          // password,
          // title,
          // contents,
          ...inputs,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            // prev는 지금 등록한 글
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]; // 지금등록한 글 + 기존배열10개 = 총 11개가 들어있음
            },
          }, // 어떤 필드 수정할래
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <Wr key={el._id}>
          <Span>{el.writer}</Span>
          <Span>{el.title}</Span>
          <Span>{el.contents}</Span>
          <Delete onClick={onClickDelete(el._id)}>삭제하기</Delete>
        </Wr>
      ))}
      <Div>
        작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
        제목 : <input type="text" id="title" onChange={onChangeInputs} />
        내용 : <input type="text" id="contents" onChange={onChangeInputs} />
        비밀번호 : <input type="text" id="password" onChange={onChangeInputs} />
      </Div>
      <Create onClick={onClickSubmit}>등록하기</Create>
    </div>
  );
}
