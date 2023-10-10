import React from 'react'

const CardUK = ({imgg, title, desc}) => {
  return (
    <div className="mx-auto md:mx-0 sm:w-[50%] md:w-[31%] lg:w-[23%] mb-[25px]">
        <img className='mb-[16px]' src={imgg} alt="" />
        <h2 className='text-[20px] font-bold dark:text-[#fff] mb-[7px] w-[70%]'>{title}</h2>
        <p className='text-[#1F2428] dark:text-[#fff] text-[13px]'>{desc}</p>
    </div>
  )
}

export default CardUK