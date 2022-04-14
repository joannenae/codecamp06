export default function HofPage() {
  const onClickButton = (el) => (event) => {
    console.log(el);
  };

  return (
    <div>
      <button onClick={onClickButton(123)}>버튼</button>
    </div>
  );
}
