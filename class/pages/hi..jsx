import { Modal, Select } from "antd";
import axios from "axios";
import { useRef, useState } from "react";
import * as S from "./styles";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import { v4 as uuidv4 } from "uuid";

export default function NftMinting() {
  const [imageUrl, setImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [capture, setCapture] = useState("");
  const [network, setNetwork] = useState("");
  const [customerdata, setCustomerData] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [location, setLocation] = useState([]);
  const [mintData, setMintData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 네트워크 종류
  const { Option } = Select;

  const onChangeSelect = async (value, name) => {
    const idArray = [];
    idArray.push(value);

    console.log(value);
    console.log(name.name);
    setCustomerId(value);
    setCustomerName(name.name);
    await axios({
      method: "POST",
      url: "/v1/NFT/mint-data",
      params: {
        id_arr: idArray,
      },
    }).then((response) => {
      console.log(response);
      setMintData(response.data.data[0]);
      setLocation(response.data.data[0].location);
    });
  };

  const onChangeNetwork = (value) => {
    setNetwork(value);
    console.log(value);
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

  // 이미지 머지시 필요한 캡쳐 기능
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
    console.log(event.target.files);
    const file = event.target.files?.[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // 파일을 읽어서 임시 url 형태로 만들어줌
    fileReader.onload = (data) => {
      // 파일을 다 읽으면 이 함수 실행
      if (typeof data.target?.result === "string") {
        setImageUrl(data.target?.result);
      }
    };
  };

  // 고객사 정보
  const CustomerList = async () => {
    try {
      await axios({
        method: "GET",
        url: "/v1/NFT/customer-list",
      }).then((res) => {
        console.log(res);
        setCustomerData(res.data.data);
        console.log(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // minting
  const Mint = async () => {
    // 임시
    setIsModalOpen(false);
    const NFTimage = new FormData();
    NFTimage.append("file", imageUrl);

    const onSaveAs = async (uri, filename) => {
      console.log("onSaveAs");
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = uri;
      // link.download = filename;

      const image = dataURLtoFile(uri, filename);
      console.log("image", image);
      link.click();
      document.body.removeChild(link);

      try {
        await axios({
          method: "POST",
          url: "/v1/NFT/minting",
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
            Modal.success({ content: "minting이 완료되었습니다" });
          } else if (response.data.result_status === 300) {
            Modal.error({ content: "해당하는 고객사가 없습니다." });
          } else if (response.data.result_status === 301) {
            Modal.error({ content: "민팅 중 문제가 발생하였습니다" });
          } else if (response.data.result_status === 302) {
            Modal.error({ content: "NFT 거래 중 문제가 발생하였습니다." });
          }
          setImageUrl("");
          setCustomerId("");
          fileInput.current.value = "";
        });
      } catch (error) {
        console.log(error);
      }
    };
    // 캡쳐
    console.log("onCapture");
    html2canvas(document.getElementById("div")).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), capture);
    });
  };

  if (loading) {
    return <>loading...</>;
  } else {
    return (
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
            <Button key="submit" onClick={Mint}>
              민팅
            </Button>,
          ]}
        >
          <S.Wrapper>
            <S.UploadBox>
              <S.ImageFile
                type="file"
                onChange={onChangeFile}
                ref={fileInput}
              />
              <div id="div">
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
                        left: 120,
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
                        left: 120,
                        bottom: 130,
                        textAlign: "center",
                      }}
                    >
                      {location}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </S.UploadBox>
            <S.Container>
              <Select
                placeholder="고객사 선택"
                onChange={onChangeSelect}
                style={{
                  width: 120,
                }}
              >
                {isModalOpen
                  ? customerdata.map((el) => {
                      return (
                        <Option
                          key={uuidv4()}
                          value={el.customer_id}
                          name={el.customer_name}
                        >
                          {el.customer_name}
                        </Option>
                      );
                    })
                  : "고객사 선택"}
              </Select>
              <S.SelectBox>
                <Select
                  placeholder="네트워크 선택"
                  style={{
                    width: 120,
                  }}
                  onChange={onChangeNetwork}
                >
                  <Option value="1">메인넷</Option>
                  <Option value="2">테스트넷</Option>
                </Select>
              </S.SelectBox>
              <S.TreeCount>1</S.TreeCount>
            </S.Container>
          </S.Wrapper>
        </Modal>
      </>
    );
  }
}
