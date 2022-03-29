import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
    alert(value + "점");
  };

  return (
    <div>
      <Rate onChange={handleChange} value={value} />
      <div>{value}점</div>
    </div>
  );
}
// 스코프체인
