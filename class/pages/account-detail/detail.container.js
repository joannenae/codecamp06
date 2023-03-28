import { useState } from "react";
import AccountDetailPresenter from "./detail.presenter";

export default function AccountDetailContainer() {
  // 계정 이름 변경 state
  const [change, setChange] = useState(false);
  // 클립보드 복사
  const [isCopy, setIsCopy] = useState(false);
  // tab
  const [tab, setTab] = useState(false);
  // 비공개키 내보내기 모달 state
  const [secret, setSecret] = useState(false);
  // 비공개키 입력 state
  const [password, setPassword] = useState("");
  //비공개키 비밀번호 변경 state
  const [status, setStatus] = useState(false);
  //키스토어 모달 state
  const [keyOpen, setKeyOpen] = useState(false);
  // 키스토어 비밀번호 입력 state - keystore.container에 props로 내리기
  const [keypass, setKeyPass] = useState("");
  const [keypassConfirm, setKeyPassConfirm] = useState("");

  // 계정 이름 변경
  const onChangeEdit = () => {
    setChange(true);
  };

  // 비공개키 내보내기 모달
  const showSecret = () => {
    setSecret(true);
  };
  const secretOk = () => {
    setSecret(false);
    setStatus(false);
    setPassword("");
  };
  const secretCancel = () => {
    setSecret(false);
    setStatus(false);
    setPassword("");
  };
  // 비공개키 입력
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // 비공개키 입력 버튼
  const onClickPassword = () => {
    setStatus(true);
  };
  // 키스토어 비밀번호 설정 모달
  const showKeystore = () => {
    setKeyOpen(true);
  };

  const keystoreOk = async () => {
    if (keypass && keypassConfirm) {
      try {
        await axios
          .post("/v1/wallet/export-keystore", {
            address: "0xc51581f158ed330880985ca3b5935ce3ae03e6b2",
            password: keypass,
          })
          .then((response) => {
            if (response.data.status === 101) {
              console.log("성공");
              //     setKeyOpen(false);
              //result 다운로드 시키기
            }
            if (response.data.status === 102) {
              Modal.error({ content: "통신 오류" });
            }
            if (response.data.status === 103) {
              Modal.error({ content: "정보 저장 오류" });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const keystoreCancel = () => {
    setKeyOpen(false);
  };

  // 복사
  const handleCopyClipBoard = (text) => {
    copy(text);
    setTimeout(() => {
      setIsCopy(true);
    }, 500);
  };

  setTimeout(() => {
    setIsCopy(false);
  }, 3500);

  return <AccountDetailPresenter />;
}
