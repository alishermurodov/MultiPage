import React from 'react'
import RatingStar from './RatingStar'

const CardRating = ({ img, name, desc }) => {
    return (
        <div className='p-[10px] rounded-[16px] mb-[30px] bg-[#fff] xl:flex justify-between gap-[40px] sm:w-[45%]' style={{boxShadow: '0px 0px 70px 0px rgba(138, 138, 138, 0.10)'}}>
            <img className='mx-auto md:mx-0 mb-[28px] md:mb-0' src={img} alt="" />
            <div className="">
                <h3 className='mb-[6px] text-[18px] font-medium'>{name}</h3>
                <RatingStar />
                <p className='mt-[14px] mb-[60px] text-[13px]'>{desc}</p>
                <div className="flex gap-[15px]">
                    <p className='font-bold text-[12px]'>Дата: <br /> Город:</p>
                    <p className=' text-[12px]'>16 Ноября 2021 <br /> Санкт-Петербург</p>
                </div>
            </div>
        </div>
    )
}

export default CardRating