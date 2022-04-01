import styled from "@emotion/styled";

const Logo = styled.div`
  height: 100px;
  /* background-color: #98a0fb; */
  background-color: #f8efe8;
  /* width: 1920px; */
`;
const LogoImg = styled.img`
  width: 300px;
  margin-top: 20px;
`;
const Profile = styled.div`
  width: 300px;
  float: right;
  margin-top: 20px;
`;
const ProfileImg = styled.img`
  margin-right: 15px;
  width: 40px;
  margin-top: 10px;
`;
const Poly = styled.img`
  margin-top: 10px;
`;

export default function LayoutHeader() {
  return (
    <>
      <Logo>
        <LogoImg src="/tamburins.jpg" alt="" />
        <Profile>
          <ProfileImg src="/charic.png" />
          <Poly src="/Polygon 1.png" />
        </Profile>
      </Logo>
    </>
  );
}
