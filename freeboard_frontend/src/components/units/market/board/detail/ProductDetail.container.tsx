import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../commons/types/generated/types";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.marketid) },
  });

  const onClickMoveList = () => {};
  const onClickMoveEdit = () => {
    router.push(`/market/${router.query.marketid}/edit`);
  };

  return (
    <ProductDetailUI
      data={data}
      onClickMoveList={onClickMoveList}
      onClickMoveEdit={onClickMoveEdit}
    />
  );
}
