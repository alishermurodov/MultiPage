import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../../App.css'

// img 
import s21 from '../../assets/homeImg/s21.png'
import s22 from '../../assets/homeImg/s22.png'
import s23 from '../../assets/homeImg/s23.png'
import s24 from '../../assets/homeImg/s24.png'
import s25 from '../../assets/homeImg/s25.png'



export default function SwiperSmall() {
    

    return (
        <>
            <div style={{boxShadow: "1px 2px 7px 1px #fff" }} className="rounded-[21px] bg-[#fff] p-[12px] shadow-lg mb-[54px]">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide><img className='' src={s21} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='' src={s22} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='' src={s23} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='' src={s24} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='' src={s25} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='' src={s22} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='' src={s21} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='' src={s24} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='' src={s25} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
