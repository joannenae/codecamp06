import { Modal } from "antd";
import axios from "axios";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import Tab from "../../../../commons/tabs";
import CircularStatic from "../../../../commons/progressbar/index";
// 식수 위치는 주석 처리 된 코드
// Tab도 주석 처리

export default function NftMinting() {
  const [imageUrl, setImageUrl] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [network, setNetwork] = useState();
  const [custMintOne, setCustMintOne] = useState([]);
  const [custMintBatch, setCustMintBatch] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  // const [location, setLocation] = useState("");
  const [tab, setTab] = useState("");
  const [mintArray, setMintArray] = useState([]);
  //
  const [, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  //

  const onChangeSelect = async (value, name) => {
    const idArray = [];
    idArray.push(value);
    mintArray.splice(0);

    setCustomerId(value);
    mintArray.push({ customer_id: value, customer_nm: name.name });
    setCustomerName(name.name);
  };

  // 네트워크 선택
  const onChangeNetwork = (value) => {
    setNetwork(value);
  };

  // 식수 위치 입력
  // const onChangeLocation = (event) => {
  //   setLocation(event.target.value);
  // };

  const showModal = () => {
    setIsModalOpen(true);
    CustomerList();
    batchCustomerList();
    setTab("1");
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setImagesUrl([]);
    setImageUrl([]);
  };

  // const onTabClick = async (key, event) => {
  //   if (key === "1") {
  //     console.log(key);
  //     setTab(key);
  //     setCustomerName("");
  //     // setLocation("");
  //     setNetwork(null);
  //     console.log(location);
  //   }
  //   if (key === "2") {
  //     console.log(key);
  //     setTab(key);
  //     setMintArray([...custMintBatch]);
  //     setCustomerName("");
  //     // setLocation("");
  //     setNetwork(null);
  //     console.log(location);
  //   }
  // };
  const onTabClick = () => {
    setMintArray([...custMintBatch]);
  };

  // 단일 image 선택 함수
  const onChangeFile = (event) => {
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

  // 일괄 image 선택 함수
  const onChangeFiles = (event) => {
    const files = event.target.files[0];
    const filesReader = new FileReader();
    filesReader.readAsDataURL(files);
    filesReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        setImagesUrl(data.target?.result);
      }
    };
  };

  // 단일 민팅 시 고객사 목록 불러오는 함수
  const CustomerList = async () => {
    try {
      await axios({
        method: "GET",
        url: "/v1/NFT/mint-data",
      }).then((response) => {
        console.log(response);
        setCustMintOne(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const batchCustomerList = async () => {
    try {
      await axios({
        method: "GET",
        url: "/v1/NFT/batch-mint-data",
      }).then((response) => {
        setCustMintBatch(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 이미지 머지시 필요한 캡쳐 함수
  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.toString().split(",");
    const mime = arr[0].match(/:(.*?);/)[1];

    const bstr = atob(arr[1]);

    let n = bstr.length;

    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  let accountArray = 0;

  const onSaveAs = async (uri, filename, custId) => {
    setLoading(true);
    try {
      // if (loc === null || loc === undefined) {
      //   loc = location;
      // }
      // location 정보 null 일때 잡아주는 예외처리

      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = uri;

      const image = dataURLtoFile(uri, filename);
      link.click();
      document.body.removeChild(link);

      const NFTimage = new FormData();
      NFTimage.append("file", image);

      /* 저장요청 */
      await axios({
        method: "POST",
        url: "/v1/NFT/save",
        data: NFTimage,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          customer_id: custId,
          // location: loc,
        },
        // axios 제공 - loading
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentage);
        },
      }).then(async (response) => {
        console.log("민팅 정보 저장", response);
        if (response.data.result_status === 200) {
          accountArray++;
        } else if (response.data.result_status === 300) {
          accountArray--;
          console.log(response.data.message);
        } else if (response.data.result_status === 301) {
          accountArray--;
          console.log(response.data.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // setState
  const ImgStateSet = async (custNm) => {
    setCustomerName(custNm);
    // setLocation(loc);
    return true;
  };

  // 단일, 일괄 minting 함수
  const Mint = async (e) => {
    console.log("for문시작");
    if (tab === "1") {
      for (let i = 0; i < mintArray.length; i++) {
        await html2canvas(document.getElementById("div")).then(
          async (canvas) => {
            await onSaveAs(
              canvas.toDataURL("image/png"),
              "minting_" + i + ".png",
              mintArray[i].customer_id,
              // mintArray[i].location,
              mintArray[i].customer_name
            );
          }
        );
      }
    } else if (tab === "2") {
      console.log(mintArray);
      for (let i = 0; i < mintArray.length; i++) {
        let resultSetData = await ImgStateSet(
          mintArray[i].customer_name
          // mintArray[i].location
        );
        if (resultSetData === true) {
          await html2canvas(document.getElementById("div2")).then(
            async (canvas) => {
              await onSaveAs(
                canvas.toDataURL("image/png"),
                "minting_" + i + ".png",
                mintArray[i].customer_id
              );
              if (i === mintArray.length) {
                console.log("여기?");
                Modal.success({ content: "민팅 정보 저장이 완료되었습니다." });
              }
            }
          );
        }
      }
    }
    console.log("for문 끝");

    if (mintArray.length === accountArray) {
      console.log("민팅 시작");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      setIsModalOpen(false);
      await axios({
        method: "POST",
        url: "/v1/NFT/mint",
        params: {
          bc_id: network,
        },
      });
      setLocation("");
      e.preventDefault();
      setImageUrl([]);
      setImagesUrl([]);
      setLoading(false);
      accountArray = 0;
    }
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
        // bodyStyle={{ height: 600 }}
        destroyOnClose={true}
        footer={[
          <Button onClick={handleCancel}>취소</Button>,
          <Button
            onClick={Mint}
            disabled={imagesUrl.length === 0 && imageUrl.length === 0}
          >
            민팅
          </Button>,
        ]}
      >
        {/*  progress */}
        {loading === true ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <CircularStatic />
            </div>
            <div style={{ marginLeft: "15px", fontWeight: "bold" }}>
              {" "}
              민팅 정보를 저장중입니다.
            </div>
          </div>
        ) : (
          <></>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Tab
            imageUrl={imageUrl}
            imagesUrl={imagesUrl}
            onChangeFile={onChangeFile}
            onChangeFiles={onChangeFiles}
            onChangeNetwork={onChangeNetwork}
            onChangeSelect={onChangeSelect}
            custMintOne={custMintOne}
            customerName={customerName}
            isModalOpen={isModalOpen}
            onTabClick={onTabClick}
          />
        </div>
      </Modal>
    </>
  );
}
