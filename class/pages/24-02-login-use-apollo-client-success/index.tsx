import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

function LoginSuccessPage() {
  const [userInfo] = useRecoilState(userInfoState);

  return <div>{userInfo.name}님 환영합니다!</div>;
}

export default withAuth(LoginSuccessPage);
