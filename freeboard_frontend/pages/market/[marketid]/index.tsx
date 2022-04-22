import { useRouter } from "next/router";
import ProductDetail from "../../../src/components/units/market/board/detail/ProductDetail.container";

export default function ProductDetailPage() {
  const router = useRouter();
  return (
    <div>
      <ProductDetail />
    </div>
  );
}
