import { Fragment } from "react";
import { Nav, Wrapper } from "./Navigation.styles";
import { INavigationUIProps } from "./Navigation.types";

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/market" },
  { name: "마이페이지", page: "/mypage" },
  { name: "OpenAPI", page: "/boards/openapi" },
];

export default function NavigationUI(props: INavigationUIProps) {
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <Nav id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </Nav>
        </Fragment>
      ))}
    </Wrapper>
  );
}
