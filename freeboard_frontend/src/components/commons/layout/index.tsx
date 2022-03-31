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
  margin-left: 20px;
  margin: 0 auto;
  height: auto;
  width: 1920px;
`;

// const LayoutSidebar = styled.div`
//   width: 500px;
//   background-color: skyblue;
// `;

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
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Layoutfooter />
    </>
  );
}
