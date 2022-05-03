import { useRouter } from "next/router";
import { useEffect } from "react";
import { IBoard } from "../../../../../../commons/types/generated/types";
import ProductListItemUI from "./ProductListItem.presenter";

const getDate = () => {
  const newdate = new Date();
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth() + 1;
  const dd = newdate.getDate();
  return `${yyyy}-${String(mm).padStart(2, "0")}-${String(dd).padStart(
    2,
    "0"
  )}`;
};
export default function ProductListItem(props) {
  const router = useRouter();
  const today = getDate();

  const onClickProductList = (el: IBoard) => () => {
    console.log(el);
    const prevBasketItems = JSON.parse(localStorage.getItem("today") || "[]");

    //
    const tmp = prevBasketItems.filter((item: IBoard) => item._id === el._id);
    if (tmp.length === 1) {
      return;
    }
    const { __typename, ...rest } = el;
    prevBasketItems.push(rest);
    // localStorage.setItem(today, JSON.stringify(prevBasketItems));
    // props.setBasketItems(today);
    //

    console.log(prevBasketItems);
    // 상품 정보
    localStorage.setItem("today", JSON.stringify([...prevBasketItems]));
    // localStorage.setItem(today, JSON.stringify([prevBasketItems , el]));
    props.setBasketItems((prev) => [...prev, el]);
    router.push(`/market/${el._id}`);
  };

  useEffect(() => {
    // console.log(props.basketItems);
  }, [props.basketItems]);

  return (
    <>
      <ProductListItemUI
        el={props.el}
        onClickProductList={onClickProductList}
      />
    </>
  );
}
