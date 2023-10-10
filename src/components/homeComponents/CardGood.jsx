import React from 'react'

const CardGood = ({imgg, title, desc}) => {
  return (
    <div className="mx-auto md:mx-0 sm:w-[50%] md:w-[31%] mb-[25px] bg-[#fff] rounded-[16px] p-[35px]" style={{boxShadow: '0px 0px 70px 0px rgba(138, 138, 138, 0.10)'}}>
        <img className='mb-[30px]' src={imgg} alt="" />
        <h2 className='text-[18px] font-medium  mb-[10px] '>{title}</h2>
        <p className='text-[#1F2428]  text-[13px]'>{desc}</p>
    </div>
  )
}

export default CardGood