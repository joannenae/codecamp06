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
  height: 500px;
`;

const LayoutSidebar = styled.div`
  height: 500px;
  width: 100px;
  background-color: orange;
`;

//  숨기고 싶은 헤더 주소 (유지 보수 )
const HIDDEN_HEADERS = [
  "/12-05-modal-refactoring",
  // ...
  // ...
  // ...
];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); // asPath가 현재주소

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>여기는 사이드바입니다.</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Layoutfooter />
    </>
  );
}
