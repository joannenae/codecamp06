export default function MapPage() {
  ["철수", "영희", "훈이", "맹구"].map(function (asdf, index) {
    console.log(`${asdf}는 ${index}번째 칸에 들어있습니다.`);
  });
  return <div>map </div>;
}
