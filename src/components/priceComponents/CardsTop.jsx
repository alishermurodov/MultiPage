import React, { useEffect } from 'react'
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


const CardsTop = ({img, title, desc}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className='mb-[30px] md:mb-0 sm:w-[44%] md:w-[30%] xl:w-[20%]'>
        <img className='mb-[40px]' src={img} alt="" />
        <h4 className='mb-[7px] text-[24px] font-bold dark:text-[#fff]'>{title}</h4>
        <p className='mb-[22px] dark:text-[#fff]'>{desc}</p>
        <button className='w-[180px] h-[56px] bg-[#41B7E9] text-[15px] text-[#fff] rounded-[8px]'>Бесплатно</button>
    </div>
  )
}

export default CardsTop