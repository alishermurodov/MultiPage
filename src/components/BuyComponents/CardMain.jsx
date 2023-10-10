import React, { useEffect } from 'react'
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


const CardMain = ({ img, img2, title, desc}) => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div data-aos="fade-up" data-aos-duration="2000" className='lg:flex items-center md:gap-[40px] lg:gap-[71] mb-[50px] md:mb-[80px]'>
            <img className='mb-[30px] lg:mb-0' src={img} alt="" />
            <div className="">
                <div className="md:flex items-center gap-[50px]">
                    <img className='mb-[18px] md:mb-0' src={img2} alt="" />
                    <p className='dark:text-[#fff] font-bold text-[21px] md:text-[24px] mb-[12px] md:w-[45%]'>{title}</p>
                </div>
                <p className='dark:text-[#fff]'>{desc}</p>
            </div>
        </div>
    )
}

export default CardMain