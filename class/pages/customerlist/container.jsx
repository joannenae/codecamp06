import { Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomerListPresenter from "./customerlist.presenter";
import { ExclamationCircleFilled } from "@ant-design/icons";

export default function CustomerListContainer() {
  // 전체 선택
  const [isSelectAll, setIsSelectAll] = useState("");
  // 개별 선택
  const [selectedList, setSelectedList] = useState([]);
  // 고객사 정보
  const [customerinfo, setCustomerInfo] = useState([]);

  // customer id
  const [customerId, setCustomerId] = useState([]);
  // customer index
  const [customerindex, setCustomerIndex] = useState(0);

  // 일괄 생성 버튼
  const [disabledButtons, setDisabledButtons] = useState(true);

  // 생성여부 N / Y
  const [status, setStatus] = useState([]);

  // 지갑 생성 모달
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage] = useState(10);

  const indexOfLastPost = currentPage * postperPage;
  const indexOfFirstPost = indexOfLastPost - postperPage;
  const currentPosts = customerinfo.slice(indexOfFirstPost, indexOfLastPost);

  const handleChangePage = (pageNumber) => setCurrentPage(pageNumber);

  const totalPosts = customerinfo.length;

  // -----------------------------------------------------------------

  // 전체 선택 function
  const onClickSelectAll = () => {
    // 지갑 생성 여부 filter
    console.log(customerId);

    if (!isSelectAll) {
      const isN = customerinfo.filter((v) => {
        return v.own_wallet === "N";
      });
      setStatus(isN);
      setIsSelectAll(true);
      console.log(isSelectAll);

      customerinfo.map((el) => {
        if (!selectedList.includes(el)) {
          selectedList.push(el);
          customerId.push(el.customer_id);
        }
        return 0;
      });
      setSelectedList([...selectedList]);
      setDisabledButtons(false);
    } else {
      setIsSelectAll(false);
      selectedList.splice(0);
      customerId.splice(0);
      setSelectedList(selectedList);
      setDisabledButtons(true);
    }
  };
  // 개별 선택 function
  const onClickCheck = (el1, idx) => () => {
    console.log(customerId);
    if (selectedList.includes(el1)) {
      const indexSearch = selectedList.indexOf(el1, 0);
      selectedList.splice(indexSearch, 1);
      setSelectedList([...selectedList]);
      setCustomerIndex(idx);
      const info = el1.customer_id;
      //
      const idSearch = customerId.indexOf(info, 0);
      console.log("idSearch", idSearch);
      //
      customerId.splice(idSearch, 1);
    } else if (!selectedList.includes(el1)) {
      selectedList.push(el1);
      setSelectedList([...selectedList]);
      setCustomerIndex(idx);
      const info = customerinfo[idx];
      const id = info.customer_id;
      customerId.push(id);
    }
    // 버튼 활성화
    if (selectedList.length >= 1) {
      setDisabledButtons(false);
    } else {
      setDisabledButtons(true);
    }
  };

  // 정보 조회 function
  const CustomerList = async () => {
    try {
      await axios({
        method: "GET",
        url: "/v1/customer/search",
      }).then((response) => {
        console.log(response);
        setCustomerInfo(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CustomerList();
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const BatchWallet = async () => {
    try {
      await axios({
        method: "POST",
        url: "/v1/wallet/create-batch",
        params: {
          customer_id: customerId,
        },
      });
      setLoading(true);
      setTimeout(() => {
        setOpen(false);
        setLoading(false);
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomerListPresenter
      customerinfo={customerinfo}
      onClickSelectAll={onClickSelectAll}
      onClickCheck={onClickCheck}
      selectedList={selectedList}
      BatchWallet={BatchWallet}
      disabledButtons={disabledButtons}
      totalPosts={totalPosts}
      handleChangePage={handleChangePage}
      currentPage={currentPage}
      currentPosts={currentPosts}
      showModal={showModal}
      hideModal={hideModal}
      open={open}
      loading={loading}
    />
  );
}
