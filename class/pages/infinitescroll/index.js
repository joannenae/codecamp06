import { useEffect, useState } from "react";
import { fetchImages } from "../../src/utils/fetchImages";
import { Image } from "../../src/components/units/scrollimage/image";

export default function Infinite() {
  const [page, setPage] = useState(1);
  const [imagelist, setImagelist] = useState([]);
  const nextPage = () => {
    setPage(page + 1);
  };
  console.log(page);
  const ImageArray = async () => {
    const result = await fetchImages(page);
    console.log("page", page);
    console.log(result);
    if (result.status === 200) {
      setImagelist((prev) => [...prev, ...result.data]);
    }
  };

  useEffect(() => {
    ImageArray();
  }, [page]);

  console.log(nextPage);
  // 마지막 데이터 찾아서 마지막 불러오면 api 호출할 수 있도록 index(나는 NFT image id)
  return (
    <>
      <div>
        {imagelist.map((el, index) => (
          <Image
            el={el}
            key={el.id}
            islast={index === imagelist.length - 1}
            nextPage={nextPage}
          />
        ))}
      </div>
    </>
  );
}
