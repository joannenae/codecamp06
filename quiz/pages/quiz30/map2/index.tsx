import { useRouter } from "next/router";
import Link from "next/link";

export default function KaKaoMapPage() {
  const router = useRouter();

  return (
    // <button onClick={onClickMap}>맵으로 이동</button>;
    <Link href="/quiz30/map1">
      <a>맵으로 이동!!</a>
    </Link> // a 태그 처럼 보이기 위함이지만 link 태그를 통해서 이동(client side rendering)
    // link 태그를 쓸땐 a 태그로 감싸주기
  );
}
