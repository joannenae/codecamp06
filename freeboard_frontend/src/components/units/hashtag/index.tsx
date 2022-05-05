import { KeyboardEvent, MouseEvent } from "react";
import { v4 as uuidv4 } from "uuid";

const HashTagPage = (props: any) => {
  console.log(props.hashArr);
  // 상위 컴포넌트에서 보내줘야 하는 값 (product write container에서 만들어서 props로 hashArr, setHashArr 넘겨주세용)
  //   const [hashArr, setHashArr] = useState<string[]>([]);

  const onKeyUpHash = (event) => {
    if (
      event.keyCode === 32 &&
      (event.target as HTMLInputElement).value !== " "
    ) {
      const str = "#" + (event.target as HTMLInputElement).value;
      let tempArr = [...props.hashArr];
      tempArr.push(str);
      tempArr = tempArr.filter(
        (el) => el !== "# " && el !== "#  " && el !== "#"
      );
      props?.setHashArr(tempArr);
      (event.target as HTMLInputElement).value = "";
    }
  };

  const onClickHash = (e: MouseEvent<HTMLButtonElement>) => {
    const prevArr = [...props?.hashArr];
    prevArr.splice(Number((e.target as Element).id), 1);
    console.log(prevArr);
    props.setHashArr(prevArr);
  };
  return (
    <>
      <div>
        <span>
          {props?.hashArr?.map((el: any, i: number) => (
            <button key={uuidv4()} onClick={onClickHash} id={String(i)}>
              {el}
            </button>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
};

export default HashTagPage;
