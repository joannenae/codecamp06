import axios from "axios";

//위 와 같이 page 와 limit을 parameter로 서버에 요청하여 page는 현재 요청하고자 하는 데이터의 위치 ,  limit은 현재 요청한 데이터의 갯수
export const fetchImages = async (page) => {
  const response = await axios.get(
    `https://picsum.photos/v2/list?page=${page}&limit=10`
  );
  return response;
};
