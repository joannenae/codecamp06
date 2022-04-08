export const checkFileValidation = (file?: File) => {
  // 이미지 존재여부 아래처럼 검증
  if (!file?.size) {
    alert("파일이 존재하지 않습니다!");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB!!)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다 ㅜㅜ");
    return false;
  }

  return true; // 아무 문제 없다면 return true
};
