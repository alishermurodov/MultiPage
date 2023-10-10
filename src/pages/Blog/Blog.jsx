import React from 'react'
import i1 from '../../assets/blogImg/i1.png'
import i2 from '../../assets/blogImg/i2.png'
import i3 from '../../assets/blogImg/i3.png'
import i4 from '../../assets/blogImg/i4.png'
import i5 from '../../assets/blogImg/i5.png'
import i6 from '../../assets/blogImg/i6.png'
import i7 from '../../assets/blogImg/i7.png'
import i8 from '../../assets/blogImg/i8.png'
import i9 from '../../assets/blogImg/i9.png'
import i10 from '../../assets/blogImg/i10.png'
import i11 from '../../assets/blogImg/i11.png'
import i12 from '../../assets/blogImg/i12.png'

import whatsup from '../../assets/whatsup.png'
import viber from '../../assets/viber.png'
import chat from '../../assets/chat.png'

import CardBlog from '../../components/blogComp/CardBlog'

const Blog = () => {
  return (
    <div className='w-[90%] md:w-[94%] mx-auto '>
      <div className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px] ">
        <div className="md:w-[80%] mx-auto px-[20px] md:px-0">
          <p className='opacity-[.6] text-[#fff] text-[12px] mb-[29px]'>Главная  /  Как покупать</p>
          <h3 className=' text-[22px] md:text-[30px] font-bold mb-[9px] text-[#fff]'>Блог</h3>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto sm:flex items-center justify-between flex-wrap py-[60px] md:py-[100px]">
        <CardBlog img={i1} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i2} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i3} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i4} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i5} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i6} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i7} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i8} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i9} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i10} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i11} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
        <CardBlog img={i12} title={'Интернет-магазин Urban Outfitters в UK: обзор'} />
      </div>
      <div className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px]">
        <div className="md:w-[85%] mx-auto md:flex items-center justify-between">
          <h3 className=' text-[22px] md:text-[40px] font-bold text-center md:text-start text-[#fff] '>Остались вопросы? Спросите нас в соцсетях!</h3>
          <div className="flex">
            <img src={whatsup} alt="" />
            <img src={viber} alt="" />
            <img src={chat} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog