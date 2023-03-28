import { Modal, Select } from "antd";
import axios from "axios";
import { useRef, useState } from "react";
import CircularStatic from "../../../../commons/progressbar";
import * as S from "./styles";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";

export default function NftMinting() {
  const [imageUrl, setImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setProgress] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [loacation, setLocation] = useState("");
  const [network, setNetwork] = useState();

  // 네트워크 종류
  const { Option } = Select;
  const onChangeNetwork = (value) => {
    setNetwork(value);
    console.log(value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  // 취소 버튼 클릭시 input type = file 초기화
  const fileInput = useRef();

  const handleCancel = () => {
    setImageUrl("");
    fileInput.current.value = "";
    setIsModalOpen(false);
  };
  // const onChangeCustomerName = (event) => {
  //   setCustomerName(event.target.value);
  // };
  // const onChangeLocation = (event) => {
  //   setLocation(event.target.value);
  // };

  function dataURLtoFile(dataurl, filename) {
    const arr = dataurl.toString().split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const onChangeFile = (event) => {
    const file = event.target.files?.[0];
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

  const testMint = async () => {
    setLoading(true);
    setIsModalOpen(false);

    const onSaveAs = async (uri, filename) => {
      console.log("onSaveAs");
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = uri;
      link.download = filename;

      const image = dataURLtoFile(uri, filename);
      console.log("image", image);
      link.click();
      document.body.removeChild(link);

      await axios
        // 단일 민팅
        // .post("http://3.39.180.120:5000/baobab/nft/v1/mint", {
        //   blockchain_id: 1,
        //   customer_id: 1,
        //   image,
        // })

        // 일괄 민팅
        // 이미지 머지해서 보내기
        // form-data
        .post(
          "http://3.39.180.120:3000/v1/NFT/minting",
          {
            // 네트워크 종류는 보내지 않아도 될듯
            blockchain_id: network,
            image,
          },
          {
            // axios 제공
            onUploadProgress: (progressEvent) => {
              const percentage = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setProgress(percentage);
              console.log(percentage);
            },
          }
        )
        .then((response) => {
          console.log("response", response);
          setLoading(false);
          Modal.success({ content: "minting이 완료되었습니다" });
          setImageUrl("");
          fileInput.current.value = "";
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    };

    // 캡쳐
    console.log("onCapture");
    html2canvas(document.getElementById("div")).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), customerName);
    });
  };
  return loading ? (
    <>
      <CircularStatic />
      {/* <div>gd</div> */}
    </>
  ) : (
    <>
      <Button variant="outlined" onClick={showModal}>
        {" "}
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
          <Button key="submit" onClick={testMint}>
            민팅
          </Button>,
        ]}
      >
        <S.Wrapper>
          <S.UploadBox>
            <S.ImageFile type="file" onChange={onChangeFile} ref={fileInput} />
            <div id="div">
              <S.ImageClick src={imageUrl} style={{ position: "relative" }} />
              {imageUrl ? (
                <>
                  <div
                    style={{
                      color: "white",
                      border: "1px solid red",
                      position: "absolute",
                      left: 170,
                      top: 210,
                    }}
                  >
                    하이
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </S.UploadBox>
          <S.Container>
            <S.SelectBox>
              <Select
                placeholder="네트워크 선택"
                style={{
                  width: 120,
                }}
                onChange={onChangeNetwork}
              >
                <Option value="main">메인넷</Option>
                <Option value="test">테스트넷</Option>
              </Select>
            </S.SelectBox>
            <S.TreeCount>1</S.TreeCount>
          </S.Container>
        </S.Wrapper>
      </Modal>
    </>
  );
}
