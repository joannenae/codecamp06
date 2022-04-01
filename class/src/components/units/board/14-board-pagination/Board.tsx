import styled from "@emotion/styled";

const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  /* width: 25%; */
`;

export default function Board(props: any) {
  return (
    <div>
      {props.data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
