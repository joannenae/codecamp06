import ReactPaginate from "react-paginate";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useEffect, useState } from "react";

export default function Paginate() {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(0);

  let limit = 10;

  // 첫 랜더링 = 1페이지
  useEffect(() => {
    // axios
    // const dataList = async () => {
    //   try {
    //     await axios({
    //       url: `/v1/asdf/asf?page=1&$limit={limit}`,
    //       method: "POST",
    //     }).then((res) => {
    //       console.log(res);
    //       if (res.data.result_status === 200) {
    //         setItems(res.data.data);
    //         총 페이지
    //          const total = res.data.totalpage
    //          setPage(Math.ceil(total/12))
    //          console.log(Math.ceil(total/12))
    //
    //       }
    //     });
    //   } catch (error) {
    //    console.log(error)
    //}
    // };
    // dataList();
  }, []);

  // 현재 페이지 - 클릭한 페이지
  const dataCurrent = async (currentPage) => {
    // try {
    //   await axios({
    //     url: `/v1/asdf/asf?page=${currentPage}&limit=10`,
    //     method: "POST",
    //   });
    //.then((res) => {
    //       console.log(res);
    //       if (res.data.result_status === 200) {
    //          const data = res.data.data
    //       }
    //          return data
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;

    const server = await dataCurrent(currentPage);

    setItems(server);
  };

  return (
    <div>
      {/* items - map  */}
      <div style={{ width: "80%", margin: "0 auto" }}>
        <ReactPaginate
          activeClassName={"item active "}
          breakClassName={"item break-me "}
          breakLabel={"..."}
          containerClassName={"pagination"}
          disabledClassName={"disabled-page"}
          marginPagesDisplayed={2}
          nextClassName={"item next "}
          nextLabel={
            <ArrowForwardIosIcon style={{ fontSize: 18, width: 150 }} />
          }
          onPageChange={handlePageClick}
          pageCount={25}
          pageClassName={"item pagination-page "}
          pageRangeDisplayed={2}
          previousClassName={"item previous"}
          previousLabel={
            <ArrowBackIosIcon style={{ fontSize: 18, width: 150 }} />
          }
        />
      </div>
    </div>
  );
}
