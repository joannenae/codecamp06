import { useRouter } from "next/router";

export default function Routing() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <div>하이</div>
    </>
  );
}
