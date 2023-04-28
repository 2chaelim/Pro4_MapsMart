import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";

import list from "../PlaceListData";
import HotCard from "./HotCard";

function PlaceList() {
  let [dataList, setDataList] = useState(list);
  return (
    <section>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="hot-swiper"
      >
        {dataList.map((item, i) => {
          return (
            <SwiperSlide className="hot-slide" key={i}>
              <HotCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default PlaceList;
