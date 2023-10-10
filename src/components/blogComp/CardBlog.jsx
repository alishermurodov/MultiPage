import React from 'react'

const CardBlog = ({ img, title }) => {
    return (
        <div className='sm:w-[48%] lg:w-[29%] bg-[#fff] rounded-[16px] mb-[50px]' style={{ boxShadow: '0 0 6px  0 #aba8a8' }}>
            <img className='' src={img} alt="" />
            <div className="p-[29px]">
                <h3 className='mb-[20px] text-[17px] md:text-[22px] font-bold'>{title}</h3>
                <div className="flex justify-between">
                    <p className='text-[13px] text-[#222] opacity-[.5]'>22.10.2021</p>
                    <p className='text-[13px] text-[#222] opacity-[.5]'>Читать: 8 минут</p>
                </div>
            </div>
        </div>
    )
}

export default CardBlog