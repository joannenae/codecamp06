import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import Layoutfooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation/Navigation.container";
import LayoutSideBar from "./sidebar";

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  margin-left: 20px;
  height: auto;
  /* width: 1920px; */
`;
const WrapperOut = styled.div`
  margin: 0 auto;
  /* width: 1920px; */
`;

const HIDDEN_HEADERS = ["/"];
const HIDDEN_SIDEBAR = ["/login", "/join"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); // asPath가 현재주소
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath); // asPath가 현재주소

  return (
    <>
      <WrapperOut>
        {!isHiddenHeader && <LayoutHeader />}
        {!isHiddenHeader && <LayoutBanner />}
        {!isHiddenHeader && <LayoutNavigation />}
      </WrapperOut>
      <BodyWrapper>
        <Body>{props.children}</Body>
        {/* <LayoutSideBar /> */}
        {!isHiddenHeader && !isHiddenSidebar && <LayoutSideBar />}
      </BodyWrapper>
      {!isHiddenHeader && <Layoutfooter />}
    </>
  );
}
