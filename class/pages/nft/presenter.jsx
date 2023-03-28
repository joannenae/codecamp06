import * as S from "./nft.styles";
import { Button, Divider, Input, Tooltip } from "antd";
import NftPresenterItem from "./nft.presenteritem";
import NftMinting from "./minting";
import { UnorderedListOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../../../commons/searchbar";

// 전체 리스트는 infinite scroll
export default function NftPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.SearchBox>
            <SearchBar
              value={props.customerNm}
              onChange={props.onChangeSearch}
            />
            {/* <Input
              style={{
                width: "85%",
                textAlign: "center",
              }}
              placeholder="고객사 검색 및 조회"
              onChange={props.onChangeSearch}
              allowClear
            /> */}
            {/* <Button
              type="outlined"
              style={{ borderLeft: "none" }}
              onClick={props.NFTSearch}
            >
              검색
            </Button> */}
          </S.SearchBox>
          <S.ButtonBox>
            {/* 민팅 component */}
            <NftMinting />
          </S.ButtonBox>
        </S.Header>
        {/* <Divider /> */}
        {/* <S.Outer>
          <S.ResultBox></S.ResultBox>
          <Tooltip
            title="전체 조회"
            placement="bottom"
            onClick={props.onClickAll}
          >
            <Button type="outlined">
              <UnorderedListOutlined />
            </Button>
          </Tooltip>
        </S.Outer> */}
        {/* NFT 조회 map */}
        <div style={{ width: "100%" }}>
          <div
            style={{
              width: "95%",
              margin: " 0 auto",
              display: "flex",
              flexWrap: "wrap",
              padding: "3%",
              marginRight: "1%",
            }}
          >
            {/* {props.nftInfo.map((el) => (
              <>
                <NftPresenterItem key={uuidv4()} el={el} />
              </>
            ))} */}
            {props.filterSearch.map((el) => (
              <>
                <NftPresenterItem key={uuidv4()} el={el} />
              </>
            ))}
          </div>
        </div>
      </S.Wrapper>
    </>
  );
}
