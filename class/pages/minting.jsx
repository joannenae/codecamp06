import { Modal, Select, Radio, Input } from "antd";
import axios from "axios";
import { useRef, useState } from "react";
import * as S from "./styles";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import { v4 as uuidv4 } from "uuid";

export default function NftMinting() {
  const [imageUrl, setImageUrl] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [network, setNetwork] = useState("");
  const [customerdata, setCustomerData] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [location, setLocation] = useState([]);
  // const [, setMintData] = useState([]);
  const [radio, setRadio] = useState(1);
  // const [loading, setLoading] = useState(false);

  // 네트워크 종류
  const { Option } = Select;

  // 민팅 종류 선택
  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setRadio(e.target.value);
  };

  // 고객사 리스트 선택시 해당 식수 위치 , 정보 받아오는 함수 : location , customer name
  const onChangeSelect = async (value, name) => {
    const idArray = [];
    idArray.push(value);

    console.log(value);
    console.log(name.name);
    setCustomerId(value);
    setCustomerName(name.name);
  };

  // 네트워크 선택
  const onChangeNetwork = (value) => {
    setNetwork(value);
    console.log(value);
  };

  // 식수 위치 입력
  const onChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
    CustomerList();
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  // 취소 버튼 클릭시 input type = file 초기화
  const fileInput = useRef();

  const handleCancel = () => {
    setImageUrl("");
    fileInput.current.value = "";
    setNetwork("");
    setIsModalOpen(false);
  };

  // 이미지 머지시 필요한 캡쳐 함수
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
  // image 선택 함수
  const onChangeFile = (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // 파일을 읽어서 임시 url 형태로 만들어줌
    fileReader.onload = (data) => {
      // 파일을 다 읽으면 이 함수 실행
      if (typeof data.target?.result === "string") {
        setImageUrl(data.target?.result);
      }
    };
  };

  // 단일 민팅 시 고객사 목록 불러오는 함수
  const CustomerList = async () => {
    try {
      await axios({
        method: "GET",
        url: "/v1/NFT/mint-data",
      }).then((res) => {
        console.log(res);
        setCustomerData(res.data.data);
        console.log(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 단일 minting 함수
  const Mint = async (e) => {
    e.preventDefault();
    // 임시
    setIsModalOpen(false);

    const onSaveAs = async (uri, filename) => {
      console.log("onSaveAs");
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = uri;
      // link.download = filename;

      const image = dataURLtoFile(uri, filename);
      console.log("file", image);
      link.click();
      document.body.removeChild(link);

      const NFTimage = new FormData();
      NFTimage.append("file", image);
      try {
        await axios({
          method: "POST",
          url: "/v1/NFT/mint",
          data: NFTimage,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            bc_id: network,
            customer_id: customerId,
          },
        }).then((response) => {
          console.log("response", response);
          if (response.data.result_status === 200) {
            Modal.success({ content: "민팅에 성공하였습니다." });
          } else if (response.data.result_status === 300) {
            Modal.error({
              content: "민팅은 성공하였으나 NFT 전송에 실패하였습니다",
            });
          } else if (response.data.result_status === 301) {
            Modal.error({ content: "민팅에 실패하였습니다." });
          }
          setImageUrl("");
          setCustomerId("");
          fileInput.current.value = "";
        });
      } catch (error) {
        console.log(error);
      }
    };

    // 캡쳐 기능
    html2canvas(document.getElementById("div")).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "minting.png");
    });
  };

  return (
    <>
      <Button variant="outlined" onClick={showModal}>
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
          <Button key="submit" onClick={Mint}>
            민팅
          </Button>,
        ]}
      >
        <S.Wrapper>
          <S.RadioBox>
            <Radio.Group onChange={onChangeRadio} value={radio}>
              <Radio value={1}>단일 민팅</Radio>
              <Radio value={2}>일괄 민팅</Radio>
            </Radio.Group>
          </S.RadioBox>
          {radio === 1 ? (
            // 단일 민팅
            <S.MintingContainer>
              <S.UploadBox>
                <S.ImageFile
                  type="file"
                  onChange={onChangeFile}
                  ref={fileInput}
                />
                <div id="div" style={{ width: "100%" }}>
                  <S.ImageClick
                    src={imageUrl}
                    style={{ position: "relative" }}
                  />
                  {imageUrl ? (
                    <>
                      <div
                        style={{
                          width: "200px",
                          color: "white",
                          // color: "#ccffcd",
                          fontSize: "16px",
                          fontWeight: 900,
                          letterSpacing: 1,
                          position: "absolute",
                          left: 130,
                          top: 270,
                          textAlign: "center",
                        }}
                      >
                        {customerName}
                      </div>
                      <div
                        style={{
                          width: "200px",
                          color: "white",
                          // color: "#ccffcd",
                          fontSize: "16px",
                          fontWeight: 900,
                          letterSpacing: 1,
                          position: "absolute",
                          left: 130,
                          bottom: 100,
                          textAlign: "center",
                        }}
                      >
                        {/* 식수 위치  */}
                        {location}
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
                    placeholder="고객사 선택"
                    onChange={onChangeSelect}
                    style={{
                      width: "100%",
                    }}
                  >
                    {isModalOpen
                      ? customerdata.map((el) => {
                          return (
                            <Option
                              key={uuidv4()}
                              value={el.customer_id}
                              name={el.customer_nm}
                            >
                              {el.customer_nm}
                            </Option>
                          );
                        })
                      : "고객사 선택"}
                  </Select>
                </S.SelectBox>
                <S.SelectBox>
                  <Select
                    placeholder="네트워크 선택"
                    style={{
                      width: "100%",
                    }}
                    onChange={onChangeNetwork}
                  >
                    <Option value="1">테스트넷</Option>
                    <Option value="2">메인넷</Option>
                  </Select>
                </S.SelectBox>
                <S.SelectBox>
                  <Input
                    placeholder="식수 위치를 입력해주세요."
                    onChange={onChangeLocation}
                  />
                </S.SelectBox>
              </S.Container>
            </S.MintingContainer>
          ) : (
            // 일괄 민팅
            <S.UploadBox>
              <S.ImageFile
                type="file"
                onChange={onChangeFile}
                ref={fileInput}
              />
              <div id="div" style={{ width: "100%" }}>
                <S.ImageClick src={imageUrl} style={{ position: "relative" }} />
                {imageUrl ? (
                  <>
                    <div
                      style={{
                        width: "200px",
                        color: "#ccffcd",
                        fontSize: "16px",
                        fontWeight: 900,
                        letterSpacing: 1,
                        position: "absolute",
                        left: 130,
                        top: 222,
                        textAlign: "center",
                      }}
                    >
                      {customerName}
                    </div>
                    <div
                      style={{
                        width: "200px",
                        color: "#ccffcd",
                        fontSize: "16px",
                        fontWeight: 900,
                        letterSpacing: 1,
                        position: "absolute",
                        left: 130,
                        bottom: 130,
                        textAlign: "center",
                      }}
                    >
                      {/* {location} */}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </S.UploadBox>
          )}
        </S.Wrapper>
      </Modal>
    </>
  );
}
