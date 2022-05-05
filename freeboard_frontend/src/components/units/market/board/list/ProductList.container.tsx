import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductListUI from "./ProductList.presenter";
import { FETCH_PRODUCTS, FETCH_USER_LOGGED_IN } from "./ProductList.queries";

export default function ProductList(props) {
  // useeffct로 로컬스토리지에 넣을때 이게 맞는지 확인하고
  // useEffect(() => {
  //   const baskets = JSON.parse(localStorage.getItem("today") || "[]");
  //   setBasketItems(baskets);
  // }, []);

  const router = useRouter();

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const [basketItems, setBasketItems] = useState([]);
  const [isLength, setIsLength] = useState(0);

  const [keyword, setKeyword] = useState("");
  const [isSoldout, setIsSoldout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data, fetchMore } = useQuery(FETCH_PRODUCTS, {
    variables: {
      isSoldout,
    },
  });

  const onClickSold = () => {
    setIsSoldout(true);
  };

  // 판매된 상품 탭 클릭
  const onClickSell = () => {
    setIsSoldout(false);
  };

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  const onClickLog = () => {
    router.push(`/login`);
  };
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickSubmit = () => {
    router.push("/market/new");
  };

  const onClickMoney = () => {
    setIsOpen((prev) => !prev); // 종료
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

  useEffect(() => {
    const ddd = localStorage.getItem("basketLength");
    setIsLength(ddd);
  }, []);

  return (
    <>
      <ProductListUI
        data={data}
        onLoadMore={onLoadMore}
        onClickSubmit={onClickSubmit}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        setBasketItems={setBasketItems}
        basketItems={basketItems}
        onClickLog={onClickLog}
        onClickMoney={onClickMoney}
        isOpen={isOpen}
        onToggleModal={onToggleModal}
        isLength={isLength}
        setIsLength={setIsLength}
        userData={userData}
        onClickSell={onClickSell}
        onClickSold={onClickSold}
      />
    </>
  );
}
