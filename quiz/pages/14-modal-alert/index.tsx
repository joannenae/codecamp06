import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({ content: "게시물 등록에 성공했습니다" });
  };

  return (
    <div>
      <button onClick={onClickSuccessButton}>모달 열기</button>
    </div>
  );
}
