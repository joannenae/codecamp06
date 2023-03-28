import { useEffect, useRef, useState } from "react";
import { useObserver } from "../../../commons/hooks/useObserver";

export const Image = ({ el, islast, nextPage }) => {
  console.log(el);
  const imageRef = useRef();
  const [imageUrl, setImageUrl] = useState("");
  const entry = useObserver(imageRef, { rootMargin: "100px" });

  console.log("ref", imageRef);
  useEffect(() => {
    if (!entry) {
      console.log("흥");
      return;
    }
    console.log(entry);
    if (islast && entry.isIntersecting) {
      nextPage();
    }
    if (entry.isIntersecting) {
      setImageUrl(entry.target.dataset.src);
    }
  }, [entry, islast]);

  return (
    <>
      <div style={{ minHeight: 100 }}>
        <img
          ref={imageRef}
          src={imageUrl}
          data-src={`${el.download_url}.jpg`}
          alt={el.author}
          width="200px"
        ></img>
      </div>
    </>
  );
};
