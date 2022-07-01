import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IBoard,
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
} from "../../../../../commons/types/generated/types";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  BUY_PRODUCT,
  FETCH_USED_ITEM,
  PICK_TOGLE,
} from "./ProductDetail.queries";
import { MouseEvent, useEffect, useState } from "react";
import { withAuth } from "../../../../commons/hocs/withAuth";
import { Modal } from "antd";
import { FETCH_USER_LOGGED_IN } from "../list/ProductList.queries";

function ProductDetail(props) {
  const router = useRouter();
  const [isBaskets, setIsBasket] = useState(false);
  const [tagarray, setTagarray] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [bbb, setBbb] = useState(0);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.marketid) },
  });
  console.log(data);
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(BUY_PRODUCT);
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(PICK_TOGLE);

  const onClickMoveList = () => {
    router.push(`/market`);
  };
  const onClickMoveBuy = () => {
    // router.push(`/market/${router.query.marketid}/edit`);
  };
  const onClickMoveToBoardEdit = () => {
    router.push(`/market/${router.query.marketid}/edit`); //폴더명
  };
  const onClickMoney = () => {
    setIsOpen((prev) => !prev); // 종료
  };
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickPick = () => {
    toggleUseditemPick({
      variables: { useditemId: String(router.query.marketid) },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.marketid },
        },
      ],
    });
  };
  const onClickBuy = (id: any) => async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: String(id),
        },
        refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
      });
      Modal.success({
        content: "구매성공!",
      });
      router.push("/");
    } catch (error) {
      Modal.error({ content: "구매실패!" });
    }
  };
  const onClickBasket = (data: any) => () => {
    const basket = JSON.parse(localStorage.getItem("baskets") || "[]");

    const before = basket.filter(
      (basketEl: any) => basketEl.fetchUseditem._id === data.fetchUseditem._id
    );
    if (before.length === 1) {
      alert("이미 담으신 물품입니다.");
      setIsBasket(true);
      return;
    }

    console.log(before);
    const { __typename, ...rest } = data;
    basket.push(rest);
    localStorage.setItem("baskets", JSON.stringify(basket));
    setIsBasket(true);

    const aaa = JSON.parse(localStorage.getItem("baskets") || "[]");

    const basketLength = aaa.length;
    localStorage.setItem("basketLength", basketLength);

    setBbb((bbb) => bbb + 1);
  };

  const onClickDeleteBasket = (data: any) => () => {
    const basket = JSON.parse(localStorage.getItem("baskets") || "[]");

    const newBaskets = basket.filter(
      (basketEl: any) => basketEl._id !== data.fetchUseditem._id
    );
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
    setIsBasket(false);
  };

  useEffect(() => {
    const aaa = () => {
      setTagarray(data?.fetchUseditem?.tags);
    };
    aaa();
  }, [data]);

  useEffect(() => {
    const ccc = localStorage.getItem("basketLength");
    setBbb(ccc);
  }, [bbb]);

  useEffect(() => {
    localStorage.setItem("count", bbb);
  }, [bbb]);

  return (
    <ProductDetailUI
      data={data}
      onClickMoveList={onClickMoveList}
      onClickMoveBuy={onClickMoveBuy}
      onClickBuy={onClickBuy}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      address={data?.fetchUseditem.useditemAddress.address}
      onClickPick={onClickPick}
      onClickBasket={onClickBasket}
      onClickDeleteBasket={onClickDeleteBasket}
      tagarray={tagarray}
      isBaskets={isBaskets}
      bbb={bbb}
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      onClickMoney={onClickMoney}
    />
  );
}
export default withAuth(ProductDetail);
