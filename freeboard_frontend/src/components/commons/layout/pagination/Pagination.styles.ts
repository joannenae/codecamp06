import styled from "@emotion/styled";

export const Span = styled.button`
  width 100%;
  border:none;
`;
interface IPageProps {
  isCurrent?: boolean;
}
export const SpanBox = styled.div`
  justify-content: space-between;
  display: flex;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  width: 500px;
  margin: 0 auto;
`;
export const Pages = styled.span`
  color: ${(props: IPageProps) => (props.isCurrent ? "orange" : "black")};
  font-weight: normal;
`;
