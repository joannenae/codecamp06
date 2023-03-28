// 엑셀 화면에 뿌리기 성공

import { useState } from "react";
import * as XLSX from "xlsx";

export default function ReactExcel() {
  const [fileName, setFileName] = useState(null);
  const [column, setColumn] = useState([]);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    const data = await file.arrayBuffer();
    // 전체 조회
    const workbook = XLSX.readFile(data, { sheetRows: [] });

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
    });
    setColumn(jsonData);
    console.log(jsonData);
    console.log("하이", jsonData);
  };

  return (
    // 파일 선택 옆 파일명 숨기기
    <>
      <h1>Parse Excel</h1>
      {fileName && (
        <>
          <p>
            FileName : <span>{fileName}</span>
          </p>
          <p>
            고객사 목록 :
            {column.map((el) => (
              <div key={el._id}>{el}</div>
            ))}
          </p>
        </>
      )}

      <input type="file" onChange={(e) => handleFile(e)} />
    </>
  );
}
