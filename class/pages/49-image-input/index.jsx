import React from "react";
import styled from "@emotion/styled";
import FormData from "form-data";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";

// `;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
`;
const UploadBox = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 50px;
  /* border: 1px solid red; */
`;
const Customer = styled.div`
  height: 40px;
  padding: 10px;
  border: 1px solid gainsboro;
  text-align: center;
`;
const Location = styled.div`
  margin-top: 10%;
  padding: 10px;
  height: 40px;
  border: 1px solid gainsboro;
  text-align: center;
`;
const Explain = styled.input`
  margin-top: 10%;
  padding: 15px;
  height: 40px;
  border: 1px solid gainsboro;
  text-align: center;
`;
const TreeCount = styled.div`
  width: 50px;
  height: 40px;
  margin: 0 auto;
  margin-top: 10%;
  line-height: 3;
  text-align: center;
  border: 1px solid gainsboro;
`;
const ImageFile = styled.input``;
const ImageClick = styled.img`
  width: 100%;
  margin-top: 25px;
`;

export default function ImageInput() {
  const [imageUrl, setImageUrl] = useState();
  const test = new FormData();

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const onCapture = () => {
    console.log("onCapture");
    html2canvas(document.getElementById("div")).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "image.png");
    });
  };

  const onSaveAs = async (uri, filename) => {
    console.log("onSaveAs");
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    // link.download = filename;

    const image = dataURLtoFile(uri, "내승현.jpg");
    console.log("image", image);
    link.click();
    document.body.removeChild(link);

    // const origin = uri.replace(/^data:image\/(png|jpg);base64,/, "");

    // 이미지 확인 용 없어도 됨
    await axios
      .get(
        "http://3.39.180.120:5000/",
        { image: image },
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((res) => {
        console.log(res);
      });
  };
  // console.log("jpeg", jpeg);
  // console.log("test", test);

  const onChangeFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // 파일을 읽어서 임시 url 형태로 만들어줌
    fileReader.onload = (data) => {
      // 파일을 다 읽으면 이 함수 실행
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
      }
    };
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        style={{
          width: "100px",
          height: "40px",
          fontSize: "17px",
          borderRadius: "5px",
          textAlign: "center",
        }}
        onClick={showModal}
      >
        NFT 생성
      </Button>
      <Modal
        title="NFT 민팅"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        style={{ top: 40, left: 120 }}
        footer={[
          <Button key="back" onClick={handleCancel}>
            취소
          </Button>,
          <Button key="submit" type="primary" onClick={onCapture}>
            민팅
          </Button>,
        ]}
      >
        <Wrapper>
          <UploadBox>
            <ImageFile type="file" onChange={onChangeFile} />
            <div id="div">
              <ImageClick src={imageUrl} style={{ position: "relative" }} />
              {imageUrl ? (
                <>
                  {/* 고객사명 */}
                  <input
                    type="text"
                    style={{
                      position: "absolute",
                      color: "black",
                      left: 170,
                      top: 210,
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  />
                  {/* 식수 위치 */}
                  <input
                    type="text"
                    style={{
                      position: "absolute",
                      color: "black",
                      left: 170,
                      bottom: 100,
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  />
                  {/* 네트워크 종류 선택 추가 */}
                </>
              ) : (
                <></>
              )}
            </div>
          </UploadBox>
          <Container>
            <TreeCount>1</TreeCount>
          </Container>
        </Wrapper>
      </Modal>
    </>
  );
}
