import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  margin-top: 20px;
  width: 300px;
  display: flex;
  border: none;
  border-bottom: 1px solid black;
`;

interface IProps {
  type: "text" | "password";
  placeholder: string;
  register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
    />
  );
}
