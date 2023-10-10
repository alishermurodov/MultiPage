import React, { useEffect } from 'react'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardThings = ({ img }) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos="zoom-in-down" data-aos-duration="1000" className='mb-[33px] 2xl:flex items-center gap-[50px] md:w-[44%]'>
            <img className='md:w-[50%] mb-[14px] md:mb-0' src={img} alt="" />
            <div className="">
                <p className='text-[20px] font-bold mb-[8px] dark:text-[#fff]'>Timberland</p>
                <p className='dark:text-[#fff]'><span className='font-bold dark:text-[#fff]'>NEW!</span><br />
                    Коллаб <span className='text-[#01CD7D]'> Tommy Hilfiger x <br /> Timberland!</span>
                </p>
                <p className='mb-[19px] dark:text-[#fff]'>Ботинки от <span className='font-bold'>£7.99 (3365₽)</span><br />
                    Зимние шапки за <span className='font-bold'>£7.99 (3365₽)</span>
                </p>
                <p className='text-[#01CD7D]'>Только выкуп с оператором →</p>
            </div>
        </div>
    )
}

export default CardThings