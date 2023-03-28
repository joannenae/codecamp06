import TransactionPresenter from "./transaction.presenter";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

export default function TransactionContainer() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const _export = useRef(null);

  const _grid = useRef();
  const { confirm } = Modal;

  const [page, setPage] = useState({
    skip: 0,
    take: 10,
  });

  // 엑셀 다운로드 확인
  const showConfirm = () => {
    confirm({
      title: "엑셀로 다운로드 하시겠습니까?",
      icon: <ExclamationCircleFilled />,
      style: { top: 100, left: 100 },
      okText: "확인",
      cancelText: "취소",
      onOk() {
        if (_export.current !== null) {
          // pass the products, instead the paginated data in the state.
          _export.current.save(data, _grid.current.columns);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  // 고객사명 입력 input
  const onChangeSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  // 검색 결과 리스트
  const TransactionSearch = async () => {
    try {
      await axios({
        method: "POST",
        url: "/v1/history/search-trans",
        params: {
          customer_name: search,
        },
      }).then((response) => {
        console.log(response);
        if (data.customer_nm === search) {
          setSearchData(response.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // transaciton 조회
  const Transaction = async () => {
    try {
      await axios({
        method: "GET",
        url: "/v1/history/history",
      }).then((response) => {
        console.log("데이터", response);
        setData(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Transaction();
  }, []);

  return (
    <TransactionPresenter
      _export={_export}
      _grid={_grid}
      page={page}
      setPage={setPage}
      showConfirm={showConfirm}
      data={data}
      onChangeSearch={onChangeSearch}
      search={search}
      TransactionSearch={TransactionSearch}
      searchData={searchData}
    />
  );
}
