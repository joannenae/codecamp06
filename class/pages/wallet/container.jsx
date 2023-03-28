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

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hashArr, setHashArr] = useState([]);

  // customer id
  const [customerId, setCustomerId] = useState([]);
  // customer index
  const [customerindex, setCustomerIndex] = useState(0);
  // 니모닉
  const [mnemonicdata, setMnemonicData] = useState([]);
  // 지갑용도
  const [walletpurpose, setWalletPurpose] = useState("");
  // 비밀번호
  const [password, setPassword] = useState("");
  // 블록체인 선택
  const [blockchain, setBlockchain] = useState(Network[BlockchainData[0]]);
  const [network, setNetwork] = useState(Network[BlockchainData[0]][0]);
  // private-key
  const [privatekey, setPrivateKey] = useState("");
  // public-key
  const [publickey, setPublicKey] = useState("");
  // 지갑 생성
  const [create, setCreate] = useState(true);
  // 단일 생성 버튼
  const [disabledButton, setDisabledButton] = useState(true);
  // 일괄 생성 버튼
  const [disabledButtons, setDisabledButtons] = useState(true);

  // -----------------------------------------------------------------

  // 전체 선택 function
  const onClickSelectAll = () => {
    if (!isSelectAll) {
      setIsSelectAll(true);
      customerinfo.map((el) => {
        if (!selectedList.includes(el)) {
          selectedList.push(el);
        }
        return 0;
      });
      setSelectedList([...selectedList]);
      setDisabledButtons(false);
    } else {
      setIsSelectAll(false);
      selectedList.splice(0);
      setSelectedList(selectedList);
      setDisabledButtons(true);
    }
  };

  const All = () => {
    setIsSelectAll(true);
  };

  // 개별 선택 function
  const onClickCheck = (el1, idx) => () => {
    if (selectedList.includes(el1)) {
      const indexSearch = selectedList.indexOf(el1, 0);
      selectedList.splice(indexSearch, 1);
      setSelectedList([...selectedList]);
      setCustomerIndex(idx);
      const info = el1.customer_id;
      //
      const idSearch = customerId.indexOf(info, 0);
      console.log("idSearch", idSearch);
      //
      customerId.splice(idSearch, 1);
    } else if (!selectedList.includes(el1)) {
      selectedList.push(el1);
      setSelectedList([...selectedList]);
      setCustomerIndex(idx);
      const info = customerinfo[idx];
      const id = info.customer_id;
      customerId.push(id);
    }
    console.log("customerId", customerId);
    // 버튼 활성화
    if (selectedList.length === 1) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
    if (selectedList.length >= 2) {
      setDisabledButtons(false);
    } else {
      setDisabledButtons(true);
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
    setLoading(true);
    setTimeout(() => {
      setOpen(false);
      setLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
    setHashArr([]);
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
        setMnemonicData(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 지갑 용도
  const WalletPurpose = (e) => {
    setWalletPurpose(e.target.value);
  };

  // 비밀번호
  const Password = (e) => {
    setPassword(e.target.value);
  };

  // 블록체인 선택 select
  const onChangeBlockchain = (value) => {
    setBlockchain(Network[value]);
    setNetwork(Network[value][0]);
  };
  const onChangeNetwork = (value) => {
    setNetwork(value);
  };

  // 지갑(result:keypair) 생성
  const KeyPair = async () => {
    const Id = customerinfo[customerindex];

    if (JSON.stringify(hashArr) === JSON.stringify(mnemonicdata)) {
      console.log(JSON.stringify(hashArr) === JSON.stringify(mnemonicdata));
      // setResult(true);
      Modal.success({ content: "입력한 복구키가 일치합니다." });
      try {
        await axios({
          method: "POST",
          url: "/v1/wallet/create",
          params: {
            mnemonic_check: true,
            mnemonic: mnemonicdata,
            mnemonic_pw: password,
            wallet_purpose: walletpurpose,
            owner_type: 2,
            owner_id: Id.customer_id,
            bc_id: blockchain,
          },
        }).then((response) => {
          console.log(response);
          if (response.data.result_status === 200) {
            setPublicKey(response.data.public_key);
            setPrivateKey(response.data.private_key);
          }
          setCreate(false);
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      Modal.error({ content: "입력한 복구키를 확인해주세요." });
    }
  };

  const BatchWallet = async () => {
    try {
      await axios({
        method: "POST",
        url: "/v1/wallet/create-batch",
        params: {
          customer_id: customerId,
        },
      }).then((response) => {
        console.log(response);
        if (response.data.result_status === 200) {
          Modal.success({ content: "지갑 일괄 생성에 성공하였습니다." });
          setSelectedList([]);
        } else if (response.data.result_status === 300) {
          Modal.error({
            content: "선택한 고객사 중 지갑을 보유한 고객사가 존재합니다.",
          });
        }
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
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
      BlockchainData={BlockchainData}
      network={network}
      blockchain={blockchain}
      Mnemonic={Mnemonic}
      mnemonicdata={mnemonicdata}
      WalletPurpose={WalletPurpose}
      Password={Password}
      KeyPair={KeyPair}
      All={All}
      privatekey={privatekey}
      publickey={publickey}
      create={create}
      BatchWallet={BatchWallet}
      disabledButton={disabledButton}
      disabledButtons={disabledButtons}
      walletpurpose={walletpurpose}
      password={password}
    />
  );
}
