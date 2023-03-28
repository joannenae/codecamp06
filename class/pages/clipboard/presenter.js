import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./main.styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Button, Divider, Modal, QRCode } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import NetworkContainer from "../network/network.container";
import AccountContainer from "../account/account.container";
import TransactionContainer from "../transaction/transaction.container";
import TokenContainer from "../token/token.container";

export default function MainPresenter(props) {
  let arr = "0xeccfe9da751317921ef767d2a96975188bfe3d96";
  let test =
    arr.substring(0, 3) + "******" + arr.substring(arr.length - 3, arr.length);

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return (
    <>
      <Mobile>
        <S.MoWrapper>
          <S.MoHeader>
            <S.MoLogo>DreamWallet</S.MoLogo>
            <S.MoHeaderRight>
              <S.MoNetCirBox>
                <S.MoActive onClick={props.onClickActive}>
                  <S.MoCir>●</S.MoCir>
                  <S.MoNet>Baobab 테스트넷</S.MoNet>
                  <div>
                    {props.active ? (
                      <img
                        src="/image/sortup.png"
                        style={{ width: "38%", marginLeft: 5 }}
                      />
                    ) : (
                      <img
                        src="/image/sortdown.png"
                        style={{ width: "38%", marginLeft: 5 }}
                      />
                    )}
                  </div>
                </S.MoActive>
                {props.active && (
                  <S.MoNetBox>
                    <div
                      style={{
                        overflowY: "scroll",
                      }}
                    >
                      <NetworkContainer />
                    </div>
                  </S.MoNetBox>
                )}
              </S.MoNetCirBox>
              <S.PcAccount>
                <img
                  src="/image/user.png"
                  style={{ width: "40%", marginLeft: 45 }}
                  onClick={props.onClickAccountActive}
                />
                {props.accountActive && (
                  <S.MoAccountActive>
                    <AccountContainer
                      setAccountActive={props.setAccountActive}
                    />
                  </S.MoAccountActive>
                )}
              </S.PcAccount>
            </S.MoHeaderRight>
          </S.MoHeader>
          <S.MoContainer>
            <S.MoConTop>
              <LightTooltip title="계정 정보">
                <Button
                  type="link"
                  onClick={props.showModal}
                  style={{
                    color: "black",
                    fontSize: "2.3rem",
                    height: "45px",
                    paddingTop: 0,
                    fontWeight: "bold",
                  }}
                >
                  attosiss {">"}
                </Button>
              </LightTooltip>
              <Modal
                title="계정 세부 정보"
                destroyOnClose={true}
                open={props.isModalOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
                closeIcon={<CloseOutlined style={{ fontSize: "2.8rem" }} />}
                footer={[
                  <Button
                    key="back"
                    onClick={props.handleCancel}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.handleOk}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    확인
                  </Button>,
                ]}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      marginTop: 20,
                    }}
                  >
                    attosiss
                  </div>
                  <img
                    src="/image/edit.png"
                    style={{ width: "7%", marginLeft: 5, marginTop: 20 }}
                  />
                </div>
                <div
                  style={{
                    width: "70%",
                    margin: "0 auto",
                    marginTop: 20,
                  }}
                >
                  <QRCode
                    value="0xeccfe9da751317921ef767d2a96975188bfe3d96"
                    style={{ margin: "0 auto" }}
                  />
                </div>
                <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
                  <S.MoModalAddress
                    onClick={() => props.handleCopyClipBoard(arr)}
                  >
                    {arr}
                    <img
                      src="/image/clipboard.png"
                      style={{ width: "5%", marginLeft: 5 }}
                    />
                  </S.MoModalAddress>
                </LightTooltip>
                <S.MoPrivateKey>비공개키 내보내기</S.MoPrivateKey>
              </Modal>
              <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
                <S.MoWalletAddress
                  onClick={() => props.handleCopyClipBoard(arr)}
                >
                  {test}
                  <img src="/image/clipboard.png" style={{ width: "7%" }} />
                </S.MoWalletAddress>
              </LightTooltip>
            </S.MoConTop>
            <S.PcContent>
              <S.MoImgBox>
                <div
                  style={{
                    margin: "0 auto",
                    width: "15%",
                    borderRadius: "50px",
                    background: "white",
                  }}
                >
                  <img
                    src="/image/ethereum.png"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <S.MoAmount>0 ETH</S.MoAmount>
              </S.MoImgBox>
            </S.PcContent>
            <S.MoButtonBox>
              <S.MoButton>
                전송
                <img
                  src="/image/transfer.png"
                  style={{ width: "15%", marginLeft: 5 }}
                />
              </S.MoButton>
              <S.MoButton>
                스왑{" "}
                <img
                  src="/image/swap.png"
                  style={{ width: "15%", marginLeft: 5 }}
                />
              </S.MoButton>
            </S.MoButtonBox>
            <S.MoTabBox>
              <S.MoTabTitle onClick={props.onClickTokenList} tab={props.tab}>
                토큰목록
              </S.MoTabTitle>
              <S.MoTabTrans onClick={props.onClickTransaction} tab={props.tab}>
                트랜잭션 내역
              </S.MoTabTrans>
            </S.MoTabBox>
            {props.tab ? (
              <div
                style={{
                  height: "300px",
                  overflowY: "scroll",
                  paddingBottom: "3%",
                }}
              >
                <TransactionContainer />
              </div>
            ) : (
              <div
                style={{
                  height: "300px",
                  overflowY: "scroll",
                  paddingBottom: "3%",
                }}
              >
                <TokenContainer />
              </div>
            )}
          </S.MoContainer>
        </S.MoWrapper>
      </Mobile>
      {/* pc */}
      <PC>
        <S.PcWrapper>
          <S.PcHeader>
            <S.PcLogo>DreamWallet</S.PcLogo>
            <S.PcHeaderRight>
              <S.PcNetCirBox>
                <S.PcActive onClick={props.onClickActive}>
                  <S.PcCir>●</S.PcCir>
                  <S.PcNet>Baobab 테스트넷</S.PcNet>
                  <div>
                    {props.active ? (
                      <img
                        src="/image/sortup.png"
                        style={{ width: "38%", marginLeft: 10 }}
                      />
                    ) : (
                      <img
                        src="/image/sortdown.png"
                        style={{ width: "38%", marginLeft: 10 }}
                      />
                    )}
                  </div>
                </S.PcActive>
                {/* 네트워크 */}
                {props.active && (
                  <S.PcNetBox>
                    <div
                      style={{
                        position: "relative",
                        height: 200,
                      }}
                    >
                      <NetworkContainer />
                    </div>
                  </S.PcNetBox>
                )}
              </S.PcNetCirBox>
              <S.PcAccount>
                <img
                  src="/image/user.png"
                  style={{ width: "37%" }}
                  onClick={props.onClickAccountActive}
                />
                {props.accountActive && (
                  <S.PcAccountActive>
                    <AccountContainer
                      setAccountActive={props.setAccountActive}
                    />
                  </S.PcAccountActive>
                )}
              </S.PcAccount>
            </S.PcHeaderRight>
          </S.PcHeader>
          {/* container */}
          <S.PcContainer>
            <S.PcConTop>
              <LightTooltip title="계정 정보">
                <Button
                  type="link"
                  onClick={props.showModal}
                  style={{
                    color: "black",
                    fontSize: "3.5rem",
                    height: "45px",
                    paddingTop: 0,
                    fontWeight: "600",
                  }}
                >
                  attosiss {">"}
                </Button>
              </LightTooltip>
              <Modal
                title="계정 세부 정보"
                destroyOnClose={true}
                open={props.isModalOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
                closeIcon={<CloseOutlined style={{ fontSize: "3.5rem" }} />}
                footer={[
                  <Button
                    key="back"
                    onClick={props.handleCancel}
                    style={{ fontSize: 20, paddingTop: 0, height: 40 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.handleOk}
                    style={{ fontSize: 20, paddingTop: 0, height: 40 }}
                  >
                    확인
                  </Button>,
                ]}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      marginTop: 20,
                    }}
                  >
                    attosiss
                  </div>
                  <img
                    src="/image/edit.png"
                    style={{ width: "4%", marginLeft: 5, marginTop: 20 }}
                  />
                </div>
                <div
                  style={{
                    width: "35%",
                    margin: "0 auto",
                    marginTop: 20,
                  }}
                >
                  <QRCode value="0xeccfe9da751317921ef767d2a96975188bfe3d96" />
                </div>
                <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
                  <S.PcModalAddress
                    onClick={() => props.handleCopyClipBoard(arr)}
                  >
                    {arr}
                    <img
                      src="/image/clipboard.png"
                      style={{ width: "5%", marginLeft: 5 }}
                    />
                  </S.PcModalAddress>
                </LightTooltip>
                <S.PcPrivateKey onClick={props.showSecret}>
                  비공개키 내보내기
                </S.PcPrivateKey>
                <Modal
                  destroyOnClose={true}
                  open={props.secret}
                  onOk={props.secretOk}
                  onCancel={props.secretCancel}
                  bodyStyle={{ height: 380 }}
                  footer={[
                    <Button
                      key="back"
                      onClick={props.secretCancel}
                      style={{ fontSize: 20, paddingTop: 0, height: 40 }}
                    >
                      취소
                    </Button>,
                    <Button
                      key="submit"
                      type="primary"
                      onClick={props.secretOk}
                      style={{ fontSize: 20, paddingTop: 0, height: 40 }}
                    >
                      확인
                    </Button>,
                  ]}
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      marginTop: 20,
                      textAlign: "center",
                    }}
                  >
                    attosiss
                  </div>
                  <div
                    style={{
                      width: "100%",
                      padding: "20px 0px 20px 0px",
                      textAlign: "center",
                      borderBottom: "1px solid gainsboro",
                      fontSize: "1.4rem",
                      textAlign: "center",
                    }}
                  >
                    0x7168BD1A2340994430310f7d184450A596B3177c
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      paddingTop: 20,
                    }}
                  >
                    비공개키 표시
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 30,
                      marginBottom: 10,
                    }}
                  >
                    DreamWallet 비밀번호를 입력하세요.
                  </div>
                  <input
                    style={{
                      width: "80%",
                      height: 30,
                      fontSize: "1.5rem",
                      padding: 10,
                      marginBottom: 30,
                    }}
                    type="password"
                  />
                  <div
                    style={{
                      fontSize: "1.3rem",
                      margin: "0 auto",
                      background: "#fffdf2",
                      color: "#DD5757",
                      textAlign: "center",
                    }}
                  >
                    경고: 이 키를 노출하지 마세요! <br />
                    비공개 키가 있는 사람이라면 누구든 귀하의 계정에 있는 자산을
                    소유할 수 있습니다.
                  </div>
                </Modal>
              </Modal>
              <Divider
                type="vertical"
                style={{
                  "background-color": "lightgray",
                  marginLeft: "30px",
                }}
              />
              <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
                <S.PcWalletAddress
                  onClick={() => props.handleCopyClipBoard(arr)}
                >
                  {test}
                  <img src="/image/clipboard.png" style={{ width: "16%" }} />
                </S.PcWalletAddress>
              </LightTooltip>
            </S.PcConTop>
            <S.PcContent>
              <S.PcImgBox>
                <div
                  style={{
                    margin: "0 auto",
                    width: "15%",
                    borderRadius: "50px",
                    background: "white",
                  }}
                >
                  <img
                    src="/image/ethereum.png"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <S.PcAmount>0 ETH</S.PcAmount>
              </S.PcImgBox>
            </S.PcContent>
            <S.PcButtonBox>
              <S.PcButton>
                전송
                <img
                  src="/image/transfer.png"
                  style={{ width: "15%", marginLeft: 5 }}
                />
              </S.PcButton>
              <S.PcButton>
                스왑{" "}
                <img
                  src="/image/swap.png"
                  style={{ width: "15%", marginLeft: 5 }}
                />
              </S.PcButton>
            </S.PcButtonBox>
            <S.PcTabBox>
              <S.PcTabTitle onClick={props.onClickTokenList} tab={props.tab}>
                토큰목록
              </S.PcTabTitle>
              <S.PcTabTrans onClick={props.onClickTransaction} tab={props.tab}>
                트랜잭션 내역
              </S.PcTabTrans>
            </S.PcTabBox>
            {props.tab ? (
              <div
                style={{
                  overflowY: "scroll",
                  paddingBottom: "3%",
                }}
              >
                <TransactionContainer />
              </div>
            ) : (
              <div
                style={{
                  height: "250px",
                  overflowY: "scroll",
                  paddingBottom: "3%",
                }}
              >
                <TokenContainer />
              </div>
            )}
          </S.PcContainer>
        </S.PcWrapper>
      </PC>
    </>
  );
}
