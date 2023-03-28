import copy from "copy-to-clipboard";
import { useState } from "react";
export default function Copy() {
  const [copyText, setCopyText] = useState("");

  let arr = "이건 지갑 주소";

  //   const handleCopyText = () => {
  //     setCopyText(e.target.value);
  //   };

  const copyToClipboard = () => {
    copy(arr);
    // copy(copyText);
    alert("paste!");
  };
  return (
    <>
      {/* <input value={copyText} onChange={handleCopyText} /> */}
      <button onClick={copyToClipboard}>{arr}</button>
    </>
  );
}
