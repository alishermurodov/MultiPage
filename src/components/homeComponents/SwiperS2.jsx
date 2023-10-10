import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import rusPrice from '../../assets/homeImg/rusPrice.png'
import UKprice from '../../assets/homeImg/UKprice.png'
import jasket from '../../assets/homeImg/jacket.png'
import tShirt from '../../assets/homeImg/t-shirt.png'
import jeans from '../../assets/homeImg/jeans.png'
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function SwiperS2() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                
                    <SwiperSlide>
                        <div data-aos="zoom-out-up" data-aos-duration="1000"  className="text-start mx-auto md:flex items-center justify-between dark:bg-[#111329]">
                            <div className="">
                                <h3 className='text-[21px] font-bold mb-[40px] dark:text-[#fff]'>Columbia Barlow Pass 550 Turbodown Jacket</h3>
                                <img src={rusPrice} alt="" />
                            </div>
                            <div className="">
                                <img src={jasket} alt="" />
                            </div>
                            <div className="">
                                <h3 className='text-[21px] font-bold mb-[40px] dark:text-[#fff]'>Доставка одежды из Великобритании  от £7.79</h3>
                                <img src={UKprice} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                
               
                    <SwiperSlide>
                        <div data-aos="zoom-out-up" data-aos-duration="1000" className="text-start mx-auto md:flex items-center justify-between dark:bg-[#111329]">
                            <div className="">
                                <h3 className='text-[21px] font-bold mb-[40px] dark:text-[#fff]'>Columbia Barlow Pass 550 Turbodown Jacket</h3>
                                <img src={rusPrice} alt="" />
                            </div>
                            <div className="">
                                <img src={jasket} alt="" />
                            </div>
                            <div className="">
                                <h3 className='text-[21px] font-bold mb-[40px] dark:text-[#fff]'>Доставка одежды из Великобритании  от £7.79</h3>
                                <img src={UKprice} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                
            </Swiper>
        </>
    );
}
