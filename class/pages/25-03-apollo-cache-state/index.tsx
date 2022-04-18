import { gql, useMutation, useQuery } from "@apollo/client";

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
          writer: "흑",
          password: "1234",
          title: "흥",
          contents: "배고파",
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
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// const aaa = "철수"
// function onClickAAA(aaa: any) {}
// onClickAAA("철수");

// // const { name , age } = {name:"철수" , age: 13}
// function onClickAAA(name, age) {}
// onClickAAA("철수");

// 예시 )
// 1. 구조분해 할당으로 함수 파라미터 받기
// function onClickAAA({ name, age, school }){
//   console.log(name)
// }
// 1-1 ---------------------
// name = "철수",
// age = 13,
// school = "다람쥐초등학교"
// onClickAAA({
// name: "철수",
// age: 13,
// school:"다람쥐초등학교"
// }
// 1-2 ---------------------
// const name = "철수";
// const age = 13;
// const school = "다람쥐초등학교";
// onClickAAA({ name, school });
// ------------------------------------------
// 2. 안좋은 옛날 방식
// function onClickAAA(name, age, school){
//   console.log(name)
// }

// const name: "철수"
// const age: 13
// const school: "다람쥐초등학교"
// onClickAAA(name, school)
