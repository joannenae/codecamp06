import { useRouter } from "next/router";
import { MouseEvent } from "react";
import NavigationUI from "./Navigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  return <NavigationUI onClickMenu={onClickMenu} />;
}
