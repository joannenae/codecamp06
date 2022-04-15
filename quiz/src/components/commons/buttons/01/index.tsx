import styled from "@emotion/styled";

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "#bca3e0")};
  margin-top: 50px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
`;

export default function Button01(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
