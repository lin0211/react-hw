import { pb } from "./pocketbase/pocketbase";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./components/Slide";
import "swiper/css";
import "./week2-hw.css";

const pbData = await pb.collection("program_thumbnail").getFullList({
  sort: "@random",
});

const Week2HW = () => {
  return (
    <section className="contents">
      <h1>REACT 둘째 주에 꼭 봐야하는 콘텐츠</h1>
      <Swiper spaceBetween={8} slidesPerView={6.5}>
        {pbData &&
          pbData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Slide data={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Week2HW;
