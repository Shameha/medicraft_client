// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../assets/category/pexels-karolina-grabowska-4021775.jpg"
import slide2 from "../../assets/category/pexels-markus-winkler-1430818-18485512.jpg"
import slide3 from "../../assets/category/pexels-mikhail-nilov-27914826.jpg"
import slide4 from "../../assets/category/pexels-pixabay-208512 (1).jpg"
import slide5 from "../../assets/category/pexels-asphotograpy-1001897 (1).jpg"
import slide6 from "../../assets/category/pexels-mart-production-7088485.jpg"
import slide7 from "../../assets/category/pexels-pixabay-263402 (1).jpg"
import SectionTitle from '../../Componants/SectionTitle/SectionTitle';


const Category = () => {
    return (
      <section>
        <SectionTitle
        heading={"Tools"}
        subHeading ={"Here you can finds you needs"}
        >
          
        </SectionTitle>
          <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>Doctors</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>Doctor blog</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>First aid</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>Medicine</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>Checkup</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide6} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>Instruments</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide7} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white '>Emergency</h3>
        
        </SwiperSlide>
      
        
      </Swiper>
      </section>
    );
};

export default Category;