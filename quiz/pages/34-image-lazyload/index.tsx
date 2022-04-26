import React from "react";
import LazyLoad from "react-lazy-load";

export default function MyComponent() {
  return (
    <div>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_1280.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_1280.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_1280.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2014/12/10/05/50/english-bulldog-562723__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/21/00/47/view-1844110__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2018/05/17/06/22/dog-3407906__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/22/20/10/dog-1850465__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2019/11/07/08/40/dog-4608266__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <img src="/ato.webp" alt="" width={500} height={500} />
    </div>
  );
}
