import { Swiper, SwiperSlide } from "swiper/react";
import "./ImageSlider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const ImageSlider = ({ images }) => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              className="
                object-cover 
                h-[200px]
                w-full 
                rounded-xl
                
              "
              src={image?.img}
              alt="Room"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
