import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;
export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;
export const Row = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  :hover {
    color: #ffd600;
  }
`;
export const RowTitle = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 52px;
  align-items: center;
  border-bottom: 1px solid lightgray;
  height: 52px;
`;
export const ColumnHeader = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  color: gray;
`;

export const TdBasic = styled.div`
  width: 10%;
  text-align: center;
`;
export const TdTitle = styled.div`
  width: 70%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;
export const Footer = styled.div`
  padding-top: 80px;
`;
export const Pencil = styled.img`
  width: 30px;
  height: 30px;
  -webkit-filter: opacity(0.3) drop-shadow(0 0 0 lightgray);
  filter: opacity(0.3) drop-shadow(0 0 0 lightgray);
`;
export const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  margin-top: 20px;
  border: none;

  cursor: pointer;
  :hover {
    background-color: #ffd600;
  }
`;
export const PencilBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;
