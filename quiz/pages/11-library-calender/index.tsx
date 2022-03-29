import { DatePicker, Space } from "antd";
import { useState } from "react";

export default function onChange() {
  const [dateString, setDateString] = useState();

  function onChange(date, dateString) {
    console.log(date, dateString);
    setDateString(date.format("MMMM"));
  }

  return (
    <div>
      <DatePicker onChange={onChange} />
      <div>{dateString}</div>
    </div>
  );
}
