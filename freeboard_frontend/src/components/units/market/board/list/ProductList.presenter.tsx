import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ProductList.styles";
import { IProductListUIProps } from "./ProductList.types";
import ProductListItem from "./ProductListItem/ProductListItem.container";

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <S.Wr>
      <S.WrBox>
        <S.Button>
          <S.B onClick={props.onClickSell}>판매중상품</S.B>
          <S.B onClick={props.onClickSold}>판매된상품</S.B>
        </S.Button>
        <InfiniteScroll
          style={{ width: "100%" }}
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchUseditems.map((el) => (
            <ProductListItem
              key={String(uuidv4())}
              el={el}
              setBasketItems={props.setBasketItems}
              basketItems={props.basketItems}
            />
          )) || <div></div>}
        </InfiniteScroll>
        <S.Submit onClick={props.onClickSubmit}>상품등록하기</S.Submit>
      </S.WrBox>

      {/* <S.TodayWrapper>
        <S.TodayRow>
          <S.TodayCol>작성자</S.TodayCol>
          <S.TodayCol>제목</S.TodayCol>
          <S.TodayCol>내용</S.TodayCol>
        </S.TodayRow>
        {basketitems.map((el) => (
          <S.TodayRow key={el._id}>
            <S.TodayCol>{el.name}</S.TodayCol>
            <S.TodayCol>{el.title}</S.TodayCol>
            <S.TodayCol>{el.contents}</S.TodayCol>
          </S.TodayRow>
        ))}
      </S.TodayWrapper> */}
    </S.Wr>
  );
}
