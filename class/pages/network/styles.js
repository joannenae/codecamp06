import styled from "@emotion/styled";
// 네트워크 선택

export const PcNetlist = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.3rem;
  padding: 6% 6% 4% 8%;
  color: gray;
  :hover {
    color: #0c70f2;
  }
`;
export const PcListCir = styled.div`
  margin-right: 5px;
`;
export const PcList = styled.div``;

export const PcNetAdd = styled.div`
  font-size: 1.4rem;
  bottom: 0;
  padding: 2%;
  margin-top: 10px;
  padding-top: 10px;
  width: 100%;
  border-top: 1px solid gainsboro;
  padding-bottom: 10px;
  text-align: center;
  font-weight: 500;
  :hover {
    color: #0c70f2;
  }
`;

// 네트워크 추가
export const PcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const PcFlexbox = styled.div`
  text-align: center;
  margin: 0px 0px 5px 0px;
`;
export const PcTitle = styled.div`
  font-size: 1.4rem;
  margin: 10px;
`;
export const PcInput = styled.input`
  width: 60%;
  height: 35px;
  border: 1px solid gray;
  border-radius: 7px;
  padding: 10px;
  font-size: 1.5rem;
  :focus {
    outline: 1px solid black;
  }
`;

//모바일------------------------------------------
export const MoNetlist = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 7%;
  color: gray;
  :hover {
    color: #0c70f2;
  }
`;

export const MoListCir = styled.div``;
export const MoList = styled.div`
  margin-left: 10px;
  font-size: 1.2rem;
`;
export const MoNetAdd = styled.div`
  font-size: 1.2rem;
  bottom: 0;
  left: 15%;
  padding: 2%;
  text-align: center;
  height: 25px;
  border-top: 1px solid gainsboro;
  padding-top: 10px;
  margin-bottom: 10px;
`;
export const MoInput = styled.input`
  width: 80%;
  height: 35px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.4rem;
  :focus {
    outline: 1px solid black;
  }
`;
