import AdminPresenterItem from "./admin.presenteritem";
import * as S from "./admin.styles";
import { v4 as uuidv4 } from "uuid";
import { Button } from "antd";
export default function AdminPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          관리 계정 가입 요청 <br />
        </S.Title>
        <S.Span>Admin 관리자 요청을 확인할 수 있습니다.</S.Span>
        <Button disabled={props.disableButton}>수정</Button>
        {props.adminData.map((el) => (
          <div style={{ display: "flex" }} key={uuidv4()}>
            <input
              type="checkbox"
              name="test"
              value={el}
              onChange={(e) => props.checkOnlyOne(e.target, el)}
            />
            <AdminPresenterItem el={el} />
          </div>
        ))}
      </S.Wrapper>
    </>
  );
}
