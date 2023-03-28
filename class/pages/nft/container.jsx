import axios from "axios";
import { useEffect, useState } from "react";
import NftPresenter from "./nft.presenter";

export default function NftContainer() {
  const [nftInfo, setNFTInfo] = useState([]);
  const [searchInfo, setSearchInfo] = useState([]);
  const [customerNm, setCustomerNm] = useState("");

  const NftList = async () => {
    try {
      await axios({
        method: "GET",
        url: "/v1/NFT/search-nft",
      }).then((response) => {
        console.log(response.data.data.result_data);
        setNFTInfo(response.data.data.result_data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeSearch = (event) => {
    setCustomerNm(event.target.value);
  };

  const filterSearch = nftInfo.filter((p) => {
    return p.cust_nm
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(customerNm.toLocaleLowerCase().replace(" ", ""));
  });

  // const NFTSearch = async () => {
  //   try {
  //     await axios({
  //       method: "POST",
  //       url: "/v1/NFT/search-nft",
  //       params: {
  //         customer_nm: customerNm,
  //       },
  //     }).then((response) => {
  //       console.log(response);
  //       if (response.data.result_status === 200) {
  //         setNFTInfo(response.data.data.result_data);
  //       }
  //       if (response.data.result_status === 300) {
  //         console.log(response.data.message);
  //         setMessage(response.data.message);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    NftList();
  }, []);

  const onClickAll = () => {
    NftList();
    setCustomerNm("");
  };

  return (
    <NftPresenter
      nftInfo={nftInfo}
      onChangeSearch={onChangeSearch}
      // NFTSearch={NFTSearch}
      searchInfo={searchInfo}
      onClickAll={onClickAll}
      filterSearch={filterSearch}
    />
  );
}
