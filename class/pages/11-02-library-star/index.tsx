import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return <Rate onChange={handleChange} value={value} />;
}
// 스코프체인
