import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductListUI from "./ProductList.presenter";
import { FETCH_PRODUCTS } from "./ProductList.queries";

export default function ProductList() {
  // useeffct로 로컬스토리지에 넣을때 이게 맞는지 확인하고
  // useEffect(() => {
  //   const baskets = JSON.parse(localStorage.getItem("today") || "[]");
  //   setBasketItems(baskets);
  // }, []);

  const router = useRouter();

  const [basketItems, setBasketItems] = useState([]);

  const [keyword, setKeyword] = useState("");
  const [isSoldout, setIsSoldout] = useState(false);
  const { data, fetchMore } = useQuery(FETCH_PRODUCTS, {
    variables: {
      isSoldout,
    },
  });

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  const onClickSubmit = () => {
    router.push("/market/new");
  };

  const onClickSold = () => {
    setIsSoldout(true);
  };

  const onClickSell = () => {
    setIsSoldout(false);
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <>
      <ProductListUI
        data={data}
        onLoadMore={onLoadMore}
        onClickSubmit={onClickSubmit}
        onClickSold={onClickSold}
        isSoldout={isSoldout}
        onClickSell={onClickSell}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        setBasketItems={setBasketItems}
        basketItems={basketItems}
      />
    </>
  );
}
