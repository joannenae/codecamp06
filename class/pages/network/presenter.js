import { Button, Modal } from "antd";
import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./network.styles";
import { Select } from "antd";
import { useMovetoPage } from "../../../commons/hooks/movepage";
export default function NetworkPresenter(props) {
  const { onClickMoveToPage } = useMovetoPage();

  return (
    <>
      <Mobile>
        <S.MoNetlist>
          <S.MoListCir>●</S.MoListCir>
          <S.MoList>메인넷</S.MoList>
        </S.MoNetlist>
        <S.MoNetlist>
          <S.MoListCir>●</S.MoListCir>
          <S.MoList>메인넷</S.MoList>
        </S.MoNetlist>
        <S.MoNetlist>
          <S.MoListCir>●</S.MoListCir>
          <S.MoList>메인넷</S.MoList>
        </S.MoNetlist>

        <S.MoNetAdd onClick={props.showNetwork}>＋ 네트워크 추가</S.MoNetAdd>
        <Modal
          destroyOnClose={true}
          open={props.network}
          onOk={props.networkOk}
          onCancel={props.networkCancel}
          style={{ top: 50 }}
          footer={[
            <Button
              key="back"
              onClick={props.networkCancel}
              style={{ fontSize: 20, paddingTop: 0, height: 40 }}
            >
              취소
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={props.networkOk}
              style={{ fontSize: 20, paddingTop: 0, height: 40 }}
            >
              추가
            </Button>,
          ]}
        >
          <S.PcWrapper>
            <S.PcFlexbox>
              <S.PcTitle>네트워크 타입</S.PcTitle>
              <Select
                notFoundContent={"해당하는 네트워크가 없습니다."}
                showSearch
                placeholder=""
                optionFilterProp="children"
                onChange={props.onChange}
                onSearch={props.onSearch}
                style={{
                  width: "80%",
                  fontSize: "1.3rem",
                  height: 40,
                }}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "binance main",
                    label: "Binance Mainnet",
                  },
                  {
                    value: "binance test",
                    label: "Binance Testnet",
                  },
                  {
                    value: "ethereum main",
                    label: "Ethereum Mainnet",
                  },
                  {
                    value: "goerli test",
                    label: "Goerli Testnet",
                  },
                  {
                    value: "sepolia test",
                    label: "Sepolia Testnet",
                  },
                  {
                    value: "Polygon main",
                    label: "Polygon Mainnet",
                  },
                  {
                    value: "Polygon test",
                    label: "Polygon Testnet",
                  },
                ]}
              />
            </S.PcFlexbox>
            <S.PcFlexbox>
              <S.PcTitle>네트워크 이름</S.PcTitle>
              <S.MoInput />
            </S.PcFlexbox>
            <S.PcFlexbox>
              <S.PcTitle>새 RPC URL</S.PcTitle>
              <S.MoInput />
            </S.PcFlexbox>
            <S.PcFlexbox>
              <S.PcTitle>체인 ID</S.PcTitle>
              <S.MoInput />
            </S.PcFlexbox>
            <S.PcFlexbox>
              <S.PcTitle>심볼(선택)</S.PcTitle>
              <S.MoInput />
            </S.PcFlexbox>
            <S.PcFlexbox>
              <S.PcTitle>블록 탐색기 URL(선택)</S.PcTitle>
              <S.MoInput />
            </S.PcFlexbox>
          </S.PcWrapper>
        </Modal>
      </Mobile>
      <PC>
        <S.PcNetlist>
          <S.PcListCir>●</S.PcListCir>
          <S.PcList>메인넷</S.PcList>
        </S.PcNetlist>
        {/* 
        <S.PcNetAdd onClick={onClickMoveToPage("/network")}>
          ＋ 네트워크 추가
        </S.PcNetAdd> */}
        <S.PcNetAdd onClick={props.showNetwork}>＋ 네트워크 추가</S.PcNetAdd>
        <Modal
          open={props.network}
          onOk={props.networkOk}
          onCancel={props.networkCancel}
          style={{ top: 50 }}
          destroyOnClose={true}
          footer={[
            <Button
              key="back"
              onClick={props.networkCancel}
              style={{ fontSize: 20, paddingTop: 0, height: 40 }}
            >
              취소
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={props.networkOk}
              style={{ fontSize: 20, paddingTop: 0, height: 40 }}
            >
              추가
            </Button>,
          ]}
        >
          <S.PcWrapper>
            <S.PcFlexbox>
              <S.PcTitle>네트워크 타입</S.PcTitle>
              <Select
                notFoundContent={"해당하는 네트워크가 없습니다."}
                showSearch
                placeholder=""
                optionFilterProp="children"
                onChange={props.onChange}
                onSearch={props.onSearch}
                style={{
                  width: "60%",
                  fontSize: "1.3rem",
                  height: 40,
                }}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "binance main",
                    label: "Binance Mainnet",
                  },
                  {
                    value: "binance test",
                    label: "Binance Testnet",
                  },
                  {
                    value: "ethereum main",
                    label: "Ethereum Mainnet",
                  },
                  {
                    value: "goerli test",
                    label: "Goerli Testnet",
                  },
                  {
                    value: "sepolia test",
                    label: "Sepolia Testnet",
                  },
                  {
                    value: "Polygon main",
                    label: "Polygon Mainnet",
                  },
                  {
                    value: "Polygon test",
                    label: "Polygon Testnet",
                  },
                ]}
              />
              {/* <S.PcInput /> */}
            </S.PcFlexbox>
            <S.PcFlexbox>
              <S.PcTitle>네트워크 이름</S.PcTitle>
              <S.PcInput />
            </S.PcFlexbox>
            <S.PcFlexbox>
              <S.PcTitle>새 RPC URL</S.PcTitle>
              <S.PcInput />
            </S.PcFlexbox>
            <S.PcFlexbox>
              <S.PcTitle>체인 ID</S.PcTitle>
              <S.PcInput />
            </S.PcFlexbox>
            <S.PcFlexbox>
              <S.PcTitle>심볼(선택)</S.PcTitle>
              <S.PcInput />
            </S.PcFlexbox>
            <S.PcFlexbox>
              <S.PcTitle>블록 탐색기 URL(선택)</S.PcTitle>
              <S.PcInput />
            </S.PcFlexbox>
          </S.PcWrapper>
        </Modal>
      </PC>
    </>
  );
}
