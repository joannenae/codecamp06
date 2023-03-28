import { Checkbox, Button, Pagination, Modal } from "antd";
import CustomerListPresenterItem from "./customerlist.presenteritem";
import * as S from "./customerlist.styles";
import { v4 as uuidv4 } from "uuid";

export default function CustomerListPresenter(props) {
  return (
    <>
      <S.CustomHeader>
        <S.CustomerTitle>고객사 정보 조회</S.CustomerTitle>
        <Button
          type="primary"
          style={{
            borderRadius: "5px",
            fontWeight: "bold",
          }}
          onClick={props.showModal}
          disabled={props.disabledButtons}
        >
          일괄 생성
        </Button>
        <Modal
          title="지갑 생성"
          open={props.open}
          onCancel={props.hideModal}
          footer={[
            <Button key="back" onClick={props.hideModal}>
              취소
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={props.BatchWallet}
              loading={props.loading}
            >
              확인
            </Button>,
          ]}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            지갑을 생성하시겠습니까?
          </div>
        </Modal>
      </S.CustomHeader>
      <S.List>
        <S.ListHeader>
          <Checkbox
            onClick={props.onClickSelectAll}
            checked={props.selectedList.length === props.customerinfo.length}
          />
          <S.Name>고객사명</S.Name>
          <S.Num>대표 전화번호</S.Num>
          <S.GreenPoint>그린포인트</S.GreenPoint>
          <S.NFT>NFT 보유량</S.NFT>
          <S.Status>상태</S.Status>
          <S.Own>생성 여부</S.Own>
          <S.Date>등록일</S.Date>
        </S.ListHeader>
        <S.ListContent>
          {props.currentPosts.map((el, idx) => (
            <div
              key={uuidv4()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid gainsboro",
              }}
            >
              <Checkbox
                checked={props.selectedList.includes(el)}
                onClick={props.onClickCheck(el, idx)}
              />
              <CustomerListPresenterItem el={el} />
            </div>
          ))}
        </S.ListContent>
        <div style={{ margin: "0 auto", marginBottom: "5%" }}>
          <Pagination
            onChange={props.handleChangePage}
            current={props.currentPage}
            total={props.totalPosts}
          />
        </div>
      </S.List>
    </>
  );
}
