import { Checkbox, Button, Modal, Select } from "antd";
import CustomerListPresenterItem from "./customerlist.presenteritem";
import * as S from "./customerlist.styles";
import { v4 as uuidv4 } from "uuid";
import HashTagPage from "../../../commons/hashtag/index";

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
          onClick={props.BatchWallet}
          disabled={props.disabledButtons}
        >
          일괄 생성
        </Button>
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
          <S.Date>등록일</S.Date>
        </S.ListHeader>
        <S.ListContent>
          {props.customerinfo.map((el, idx) => (
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
      </S.List>
      {/* 단일 지갑 생성 */}
      <S.WalletBox>
        <>
          <Button
            type="primary"
            onClick={props.showModal}
            style={{
              width: "130px",
              height: "35px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
            disabled={props.disabledButton}
          >
            고객사 지갑 생성
          </Button>
          <Modal
            title="지갑 생성"
            open={props.open}
            onOk={props.handleOk}
            loading={props.loading}
            onCancel={props.handleCancel}
            destroyOnClose={true}
            width={800}
            style={{ top: 40, left: 100 }}
            footer={[
              <Button key="back" onClick={props.handleCancel}>
                취소
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={props.loading}
                onClick={props.handleOk}
                disabled={
                  props.privatekey.length === 0 || props.publickey.length === 0
                }
              >
                완료
              </Button>,
            ]}
          >
            <S.Wrapper>
              <S.ButtonFlex>
                <Button
                  style={{ border: "1px solid #0050b3", color: "#0050b3" }}
                  onClick={props.Mnemonic}
                >
                  복구 키 생성
                </Button>
                <span style={{ color: "gray", fontSize: "13px" }}>
                  *복구 키로 기존 계정을 복구할 수 있습니다. 복구 키를 안전한
                  곳에 보관해주세요.
                </span>
              </S.ButtonFlex>
              {/* 생성된 니모닉 데이터 추가 */}
              <div
                style={{
                  width: "85%",
                  border: "1px solid gainsboro",
                  margin: "0 auto",
                  marginTop: "20px",
                }}
              >
                <S.Mnemonic>
                  {props.mnemonicdata.map((el, index) => {
                    return `${index + 1}.` + el + "  ";
                  })}
                </S.Mnemonic>
              </div>
              <S.MnemonicBox>
                <HashTagPage
                  setHashArr={props.setHashArr}
                  hashArr={props.hashArr}
                />
                {/* 고객사명 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <S.Partner>
                    {props.selectedList[0] === undefined
                      ? ""
                      : props.selectedList[0].customer_name}
                  </S.Partner>
                  <S.Memo onChange={props.WalletPurpose}>ESG NFT</S.Memo>
                </div>

                {/* 블록체인 선택 & 비밀번호 입력 */}
                <S.FlexBox>
                  <S.WalletPw
                    type="password"
                    placeholder="지갑 비밀번호를 입력해주세요"
                    onChange={props.Password}
                  />
                  <S.BlockChain>
                    <Select
                      style={{
                        width: 120,
                        marginLeft: "15px",
                      }}
                      defaultValue={props.BlockchainData[0]}
                      onChange={props.onChangeBlockchain}
                      options={props.BlockchainData.map((blockchain) => ({
                        label: blockchain,
                        value: blockchain,
                      }))}
                    ></Select>
                  </S.BlockChain>
                  <S.BlockChain>
                    <Select
                      style={{
                        width: 120,
                      }}
                      value={props.network}
                      onChange={props.onChangeNetwork}
                      options={props.blockchain.map((network) => ({
                        label: network,
                        value: network,
                      }))}
                    ></Select>
                  </S.BlockChain>
                </S.FlexBox>
                {/*  */}
                <S.Check>
                  {" "}
                  <Button
                    type="primary"
                    style={{ width: "100%", height: "40px" }}
                    onClick={props.KeyPair}
                    disabled={
                      props.hashArr.length !== 12 ||
                      props.walletpurpose.length === 0 ||
                      props.password.length === 0
                    }
                  >
                    생성
                  </Button>{" "}
                </S.Check>
              </S.MnemonicBox>
              <S.PairBox>
                <S.Pair>키 페어 생성</S.Pair>
                <S.KeyBox>
                  <S.Public>{props.publickey}</S.Public>
                  <S.Private>{props.privatekey}</S.Private>
                </S.KeyBox>
              </S.PairBox>
            </S.Wrapper>
          </Modal>
        </>
      </S.WalletBox>
    </>
  );
}
