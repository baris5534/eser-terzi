// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/65092.jpg"

// import required modules
import { Pagination } from "swiper/modules";

export default function Paginationn() {
  return (
    <div className="grid w-full grid-cols-4">
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper max-w-40 max-h-40"
        >
          <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
            <img src={img1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        
      </div>
      {/* <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper max-w-40 max-h-40"
      >
        <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
          <img src="../" alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
          <img src="../" alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
          <img src="../" alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
          <img src="../" alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
          <img src="../" alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
          <img src="../" alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
          <img src="../" alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center bg-[#444] flex justify-center items-center ">
          <img src="../" alt="" />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
