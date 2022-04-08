import useRouter from "next/router";
import styled from "@emotion/styled";

const Logo = styled.div`
  height: 120px;
  /* background-color: #98a0fb; */
  background-color: #f8efe8;
  /* width: 1920px; */
`;
const LogoImg = styled.img`
  width: 300px;
  margin-top: 30px;
  margin-left: 50px;
`;
const Profile = styled.div`
  width: 300px;
  float: right;
  margin-top: 30px;
`;
const ProfileImg = styled.img`
  margin-right: 15px;
  width: 50px;
  margin-top: 10px;
`;
const Poly = styled.img`
  margin-top: 10px;
  width: 20px;
  -webkit-filter: opacity(0.3) drop-shadow(0 0 0 lightgray);
  filter: opacity(0.3) drop-shadow(0 0 0 lightgray);
`;

export default function LayoutHeader() {
  const router = useRouter;
  const onClickMove = () => {
    router.push("/");
  };
  return (
    <>
      <Logo>
        <LogoImg src="/tamburins.jpg" alt="" onClick={onClickMove} />
        <Profile>
          <ProfileImg src="/charic.png" />
          <Poly src="/Polygon 1.png" />
        </Profile>
      </Logo>
    </>
  );
}
