import { Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomerListPresenter from "./customerlist.presenter";

const BlockchainData = ["클레이튼", "이더리움"];
const Network = {
  클레이튼: ["테스트넷", "메인넷"],
  이더리움: ["메인넷"],
};

export default function CustomerListContainer() {
  // 전체 선택
  const [isSelectAll, setIsSelectAll] = useState(false);
  // 개별 선택
  const [selectedList, setSelectedList] = useState([]);
  // 고객사 정보
  const [customerinfo, setCustomerInfo] = useState([]);
  // 단일 지갑 생성 버튼
  const [disabledButton, setDisabledButton] = useState(true);
  // 일괄 지갑 생성 버튼
  const [disabledButtons, setDisabledButtons] = useState(true);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setModalText] = useState("");
  const [hashArr, setHashArr] = useState([]);

  // 니모닉
  const [mnemonicdata, setMnemonicData] = useState([]);

  // 지갑용도
  const [walletpurpose, setWalletPurpose] = useState();

  // 비밀번호
  const [password, setPassword] = useState();

  // 블록체인 선택
  const [blockchain, setBlockchain] = useState(Network[BlockchainData[0]]);
  const [network, setNetwork] = useState(Network[BlockchainData[0]][0]);

  // 인덱스
  const [customerId, setCustomerId] = useState(0);

  // 비교
  const [result, setResult] = useState(false);

  // private-key
  const [privatekey, setPrivateKey] = useState();

  // public-key
  const [publickey, setPublicKey] = useState();

  const [create, setCreate] = useState(true);

  // customerid
  const Id = customerinfo[customerId];

  // 전체 선택 function
  const onClickSelectAll = () => {
    setIsSelectAll((prev) => !prev);
    const temp = [...selectedList];
    if (!isSelectAll) {
      customerinfo.map((el) => temp.push(el));
      setSelectedList(temp);
      setDisabledButtons(false);
      console.log(temp);
    } else {
      setSelectedList([]);
    }
  };

  // 개별 선택 function
  const onClickCheck = (el, idx) => () => {
    const temp = [...selectedList];
    if (temp.includes(el)) {
      const filteredArr = temp.filter((el) => el !== el);
      setSelectedList(filteredArr);
      setCustomerId(idx);
    } else {
      temp.push(el);
      setSelectedList(temp);
      setCustomerId(idx);
    }
    if (temp.length === 1) {
      setDisabledButton(false);
      setCustomerId(idx);
    }
    if (temp.length > 1) {
      setDisabledButton(true);
      setCustomerId(idx);
    }
    if (temp.length >= 2) {
      setDisabledButtons(false);
      setCustomerId(idx);
    }
  };
  // 정보 조회 function
  const CustomerList = async () => {
    try {
      await axios({
        method: "GET",
        url: "/v1/customer/search",
      }).then((response) => {
        console.log(response);
        setCustomerInfo(response.data.data);
        console.log();
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CustomerList();
  }, []);

  // 지갑 생성 부분
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setLoading(true);
    setTimeout(() => {
      setOpen(false);
      setLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  // 니모닉 생성

  const Mnemonic = async () => {
    try {
      await axios({
        method: "POST",
        url: "/v1/mnemonic/create",
        params: {
          language_cd: 1,
        },
      }).then((response) => {
        console.log(response);
        console.log(hashArr);
        setMnemonicData(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 블록체인 선택 select
  const onChangeBlockchain = (value) => {
    setBlockchain(Network[value]);
    setNetwork(Network[value][0]);
  };
  const onChangeNetwork = (value) => {
    setNetwork(value);
  };

  // 지갑 용도

  const WalletPurpose = (e) => {
    setWalletPurpose(e.target.value);
  };

  // 비밀번호
  const Password = (e) => {
    setPassword(e.target.value);
  };

  // 키페어 생성
  const KeyPair = async () => {
    if (JSON.stringify(hashArr) === JSON.stringify(mnemonicdata)) {
      setResult(true);
      Modal.success({ content: "입력한 복구키가 일치합니다." });
    } else {
      Modal.error({ content: "입력한 복구키를 확인해주세요." });
    }
    console.log(JSON.stringify(hashArr), JSON.stringify(mnemonicdata));

    try {
      await axios({
        method: "POST",
        url: "/v1/wallet/create",
        params: {
          mnemonic_check: result,
          mnemonic: mnemonicdata,
          mnemonic_pw: password,
          wallet_purpose: walletpurpose,
          owner_type: 2,
          owner_id: Id.customer_id,
          bc_id: blockchain,
        },
      }).then((response) => {
        console.log(response.data);
        setPublicKey(response.data.public_key);
        setPrivateKey(response.data.private_key);
        setCreate(false);
        Modal.success({ content: "지갑이 생성되었습니다." });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const BatchWallet = async () => {
    try {
      await axios({
        method: "POST",
        url: "/v1/wallet/create-batch-wallet",
        params: {
          customer_id: Id.customer_id,
        },
      }).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomerListPresenter
      customerinfo={customerinfo}
      onClickSelectAll={onClickSelectAll}
      onClickCheck={onClickCheck}
      selectedList={selectedList}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onChangeBlockchain={onChangeBlockchain}
      onChangeNetwork={onChangeNetwork}
      open={open}
      loading={loading}
      hashArr={hashArr}
      setHashArr={setHashArr}
      disabledButton={disabledButton}
      disabledButtons={disabledButtons}
      BlockchainData={BlockchainData}
      network={network}
      blockchain={blockchain}
      Mnemonic={Mnemonic}
      mnemonicdata={mnemonicdata}
      WalletPurpose={WalletPurpose}
      Password={Password}
      KeyPair={KeyPair}
      privatekey={privatekey}
      publickey={publickey}
      create={create}
      BatchWallet={BatchWallet}
    />
  );
}
