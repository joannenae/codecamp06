import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../commons/types/generated/types";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { MouseEvent } from "react";

export default function ProductDetail() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.marketid) },
  });

  const onClickMoveList = () => {
    router.push(`/market`);
  };
  const onClickMoveBuy = () => {
    // router.push(`/market/${router.query.marketid}/edit`);
  };
  console.log(data);

  return (
    <ProductDetailUI
      data={data}
      onClickMoveList={onClickMoveList}
      onClickMoveBuy={onClickMoveBuy}
    />
  );
}
