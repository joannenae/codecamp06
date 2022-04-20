import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onClickLogin = () => {
    if (email !== "" && password !== "") {
      localStorage.getItem("basket");
      alert("비회원으로 담긴 게시물 장바구니가 존재합니다.이동하시겠습니까?");
      router.push("/quiz30/basket");
    }
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>이동하기</button>
    </div>
  );
}
