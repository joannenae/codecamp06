import axios from "axios";
import { useEffect, useState } from "react";
import { withAuth } from "../../../commons/hocs/withAuth";
import OpenapiListUI from "./OpenapiList.presenter";

function OpenapiList() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async () => {
      new Array(9).fill(1).map(async (_) => {
        const result: any = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setImgUrls((prev) => [...prev, result.data.message]);
      });
    };
    getImg();
  }, []);

  return <OpenapiListUI imgUrls={imgUrls} />;
}

export default withAuth(OpenapiList);
