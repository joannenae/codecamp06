import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// component 는 파라미터 , 이름 바꿔도 됨
// prettier-ignore
export const withAuth = (Component: ComponentType) => <P extends {}>(props : P) => {
  const router = useRouter();

  // 권한분기 로직 추가하기
  useEffect(() => {
    // 토큰이 없다면
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다");
      router.push("/23-04-login-check");
    }
  }, []);

  return <Component {...props} />;
};
