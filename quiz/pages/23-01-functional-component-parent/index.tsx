import Presenter from "../23-02-functional-component-child";

export default function Container() {
  return <>{Presenter({ child: "철수", age: 13 })}</>;
}
