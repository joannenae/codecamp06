import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import * as S from "./transaction.styles";
import Head from "next/head";

import { Input, Button } from "antd";

export default function TransactionPresenter(props) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://kendo.cdn.telerik.com/themes/5.8.0/material/material-arctic.css"
        ></link>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <S.Wrapper>
        <S.SearchBox>
          <S.SearchPart>
            <Input
              style={{
                width: "330px",
              }}
              placeholder="고객사명을 입력하세요"
              onChange={props.onChangeSearch}
            />
            <Button type="primary" onClick={props.TransactionSearch}>
              검색
            </Button>
            <br />
          </S.SearchPart>
        </S.SearchBox>
        <S.ExcelBox>
          <ExcelExport ref={props._export} data={props.data} />
          <Grid
            data={props.data.slice(
              props.page.skip,
              props.page.skip + props.page.take
            )}
            onPageChange={(e) => props.setPage(e.page)}
            total={props.data.length}
            skip={props.page.skip}
            pageable={true}
            pageSize={props.page.take}
            ref={props._grid}
            style={{
              overflowX: "scroll",
              width: 1050,
              margin: "0 auto",
            }}
          >
            <GridToolbar>
              <button
                title="Export Excel"
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                // onClick={props.excelExport}
                onClick={props.showConfirm}
              >
                엑셀 다운로드
              </button>
            </GridToolbar>
            <GridColumn field="customer_nm" title="고객사" />
            <GridColumn field="bc_name" title="블록체인 종류" />
            <GridColumn field="bc_type" title="네트워크" />
            <GridColumn field="wallet_purpose" title="지갑 용도" />
            <GridColumn field="gas" title="가스비" />
            <GridColumn field="unit" title="단위" />
            <GridColumn field="trans_type" title="발행 구분" />
          </Grid>
        </S.ExcelBox>
      </S.Wrapper>
    </>
  );
}
