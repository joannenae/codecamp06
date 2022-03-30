import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      {/* 모달 삭제 하고 새로 만드는 방법 */}
      {isOpen && (
        <Modal
          title="Basic Modal"
          visible={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
