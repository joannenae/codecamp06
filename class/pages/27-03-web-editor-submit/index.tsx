import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

import { useForm } from "react-hook-form";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고 , 강제로 값을 넣어주는 기능 /  글을 지우면 공백이여야하는데 값이 들어가있는걸로 되어있어서 바꿔주기
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("모두 입력해주세요");
      return;
    }
    // mutation
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/27-04-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
// 등록
