import { useState } from "react";

export default function HashTag() {
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);

  const onKeyUpHash = (e: any) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      setHashArr([...hashArr, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <>
      <div>
        <span>
          {hashArr.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
}
