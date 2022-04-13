import FunctionalComponentChildPage from "../21-02-functional-component-child";

export default function FunctionalComponentParentPage() {
  // return <FunctionalComponentChildPage count={123} />;
  // 함수형 컴포넌트 실행 - count는 props로 받는 것
  return <>{FunctionalComponentChildPage({ count: 123 })}</>;
}
