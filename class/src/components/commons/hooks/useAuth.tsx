import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  // useAuth 이름은 마음대로 해도됨
  // 그러나 안에서 useRouter , useEffect 와 같이  use 부분을 써주고 있기 때문에
  // use를 붙여서 함수를 만들어 줄 것
  const router = useRouter();

  // 권한분기 로직 추가하기
  useEffect(() => {
    // 토큰이 없다면
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다");
      router.push("/23-04-login-check");
    }
  }, []);
}
