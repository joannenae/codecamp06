import { useState } from "react";
import NetworkPresenter from "./network.presenter";

export default function NetworkContainer() {
  // 네트워크 선택 모달 state
  const [network, setNetwork] = useState(false);

  // 네트워크 선택 모달 open
  const showNetwork = () => {
    setNetwork(true);
  };
  const networkOk = () => {
    setNetwork(false);
  };
  const networkCancel = () => {
    setNetwork(false);
  };

  // 네트워크 타입 선택 select

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <NetworkPresenter
      showNetwork={showNetwork}
      networkCancel={networkCancel}
      networkOk={networkOk}
      network={network}
      onChange={onChange}
      onSearch={onSearch}
    />
  );
}
