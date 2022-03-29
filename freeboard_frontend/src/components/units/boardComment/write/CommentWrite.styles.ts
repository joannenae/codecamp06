import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentBox = styled.div`
  width: 1200px;
  border-top: 1px solid lightgray;
  margin-top: 100px;
  margin: 0 auto;
`;
export const CommentTop = styled.div`
  display: flex;
  flex-direction: row;
  margin: 45px 0px 50px 0px;
`;
export const CommentInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentImg = styled.img`
  margin-right: 15px;
`;
export const CommentHead = styled.div``;
export const CommentWriter = styled.input`
  height: 40px;
  margin-right: 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
export const CommentPassword = styled.input`
  height: 40px;
  margin-right: 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
export const CommentHere = styled.div`
  margin-top: 30px;
  height: 175px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;
export const CommentText = styled.textarea`
  width: 100%;
  height: 120px;
  border: none;
  border-bottom: 1px solid lightgray;
  border-radius: 5px;
`;
export const CommentBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CommentLength = styled.div`
  padding: 15px;
  color: gray;
`;
export const CommentButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #ffd600;
  color: white;
  border: none;
  margin-top: 22px;
`;
export const Star = styled(Rate)`
  margin-bottom: 5px;
`;
