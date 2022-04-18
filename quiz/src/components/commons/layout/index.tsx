import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import Layoutfooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const BodyWrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  /* height: 500px; */
  margin-left: 20px;
  margin: 0 auto;
  width: 50%;
`;

const LayoutSidebar = styled.div`
  /* height: 500px; */
  width: 200px;
  background-color: gray;
  border-bottom: 1px solid black;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>사이드바 영역</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Layoutfooter />
    </>
  );
}
