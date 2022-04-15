import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

const Error = styled.div`
  color: red;
  font-size: 10px;
  width: 300px;
  margin: 0 auto;
`;
const Wr = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
`;
const Wrin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;
const schema = yup.object({
  writer: yup
    .string()
    .min(5, "작성자는 5글자 이내로 입력해주세요.")
    .required("작성자는 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .matches(
      /^(?=.*[a-zA-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8}$/,
      "영문, 숫자, 특수문자를 포함한 8자리 비밀번호를 입력하세요"
    ),
  title: yup.string().max(100, "100자 이내로 입력가능합니다"),
  contnents: yup.string().max(1000, "1000자 이내로 입력가능합니다"),
});

interface IFormSubmit {
  writer?: string;
  password?: string;
  title?: string;
  contensts?: string;
}

export default function ReactFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormSubmit) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <Wr>
        <Wrin>
          <Input01
            type="text"
            placeholder="작성자"
            register={{ ...register("writer") }}
          />
        </Wrin>
        <Error>{formState.errors.writer?.message}</Error>
        <Wrin>
          <Input01
            type="password"
            placeholder="비밀번호"
            register={{ ...register("password") }}
          />
        </Wrin>
        <Error>{formState.errors.password?.message}</Error>
        <Wrin>
          <Input01
            type="text"
            placeholder="제목"
            register={{ ...register("title") }}
          />
        </Wrin>
        <Error>{formState.errors.title?.message}</Error>
        <Wrin>
          <Input01
            type="text"
            placeholder="내용"
            register={{ ...register("contents") }}
          />
        </Wrin>
        <Error>{formState.errors.contents?.message}</Error>
        <Button01 isActive={formState.isValid} title="등록하기"></Button01>
      </Wr>
    </form>
  );
}
