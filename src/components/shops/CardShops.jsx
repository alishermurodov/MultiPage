import React from 'react'

const CardShops = ({img, title}) => {
  return (
    <div className='rounded-[20px] bg-[#fff] p-[30px] w-[210px] h-[170px] mb-[15px] mx-auto' style={{boxShadow: "0px 0px 70px 0px rgba(0, 0, 0, 0.05)"}}>
        <img className='mb-[20px]' src={img} alt="" />
        <p className='font-bold'>{title}</p>
    </div>
  )
}

export default CardShops