import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWrite from "../../../../src/components/units/market/board/write/ProductWrite.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      createdAt
      tags
    }
  }
`;
export default function ProductEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.marketid },
  });

  return <ProductWrite isEdit={true} data={data} />;
}
