import { useState } from "react";
import MainPresenter from "./main.presenter";
import useCopyClipBoard from "../../../commons/hooks/copyclipboard";

export default function MainContainer() {
  const [active, setActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);
  // 클립보드 복사
  const [isCopy, onCopy, setIsCopy] = useCopyClipBoard();
  // tab
  const [tab, setTab] = useState(false);
  // 계정 정보 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 비공개키 내보내기 모달 state
  const [secret, setSecret] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // 비공개키 내보내기 모달 open
  const showSecret = () => {
    setSecret(true);
  };
  const secretOk = () => {
    setSecret(false);
  };
  const secretCancel = () => {
    setSecret(false);
  };

  // 복사
  const handleCopyClipBoard = (text) => {
    onCopy(text);
  };

  setTimeout(() => {
    setIsCopy(false);
  }, 3000);

  const onClickActive = () => {
    setActive((prev) => !prev);
    setAccountActive(false);
  };

  const onClickAccountActive = () => {
    setAccountActive((prev) => !prev);
    setActive(false);
  };

  // -------토큰 , 트랜잭션 tab-------------------

  const onClickTokenList = () => {
    setTab(false);
  };
  const onClickTransaction = () => {
    setTab(true);
  };

  return (
    <MainPresenter
      handleCopyClipBoard={handleCopyClipBoard}
      isCopy={isCopy}
      onClickActive={onClickActive}
      active={active}
      onClickAccountActive={onClickAccountActive}
      setAccountActive={setAccountActive}
      accountActive={accountActive}
      onClickTokenList={onClickTokenList}
      onClickTransaction={onClickTransaction}
      tab={tab}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalOpen={isModalOpen}
      showSecret={showSecret}
      secretOk={secretOk}
      secretCancel={secretCancel}
      secret={secret}
    />
  );
}
