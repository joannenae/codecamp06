import { useAuth } from "../../src/components/commons/hooks/useAuth";

function CustomHooksUseAuthPage() {
  useAuth();

  return <div>철수의 프로필 페이지 입니다!!</div>; // 로그인 한 사람만 이용 가능
}

export default CustomHooksUseAuthPage;
