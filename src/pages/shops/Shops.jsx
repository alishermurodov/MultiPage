import React from 'react'

import whatsup from '../../assets/whatsup.png'
import viber from '../../assets/viber.png'
import chat from '../../assets/chat.png'
import CardShops from '../../components/shops/CardShops'

// img 
import i1 from '../../assets/shopsImg/i1.png'
import i2 from '../../assets/shopsImg/i2.png'
import i3 from '../../assets/shopsImg/i3.png'
import i4 from '../../assets/shopsImg/i4.png'
import i5 from '../../assets/shopsImg/i5.png'
import i6 from '../../assets/shopsImg/i6.png'
import i7 from '../../assets/shopsImg/i7.png'
import i8 from '../../assets/shopsImg/i8.png'
import i9 from '../../assets/shopsImg/i9.png'
import i10 from '../../assets/shopsImg/i10.png'
import i11 from '../../assets/shopsImg/i11.png'
import i12 from '../../assets/shopsImg/i12.png'
import i13 from '../../assets/shopsImg/i13.png'
import i14 from '../../assets/shopsImg/i14.png'
import i15 from '../../assets/shopsImg/i15.png'
import i16 from '../../assets/shopsImg/i16.png'
import i17 from '../../assets/shopsImg/i17.png'
import i18 from '../../assets/shopsImg/i18.png'
import i19 from '../../assets/shopsImg/i19.png'
import i20 from '../../assets/shopsImg/i20.png'
import i21 from '../../assets/shopsImg/i21.png'
import i22 from '../../assets/shopsImg/i22.png'
import i23 from '../../assets/shopsImg/i23.png'
import i24 from '../../assets/shopsImg/i24.png'
import i25 from '../../assets/shopsImg/i25.png'
import i26 from '../../assets/shopsImg/i26.png'
import i27 from '../../assets/shopsImg/i27.png'
import i28 from '../../assets/shopsImg/i28.png'
import i29 from '../../assets/shopsImg/i29.png'
import i30 from '../../assets/shopsImg/i30.png'

const Shops = () => {
  return (
    <div className='w-[90%] md:w-[94%] mx-auto '>
      <div className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px] ">
        <div className="md:w-[80%] mx-auto px-[20px] md:px-0">
          <p className='opacity-[.6] text-[#fff] text-[12px] mb-[29px]'>Главная  /  Как покупать</p>
          <h3 className=' text-[22px] md:text-[30px] font-bold mb-[9px] text-[#fff]'>Популярные магазины</h3>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto sm:flex items-center justify-between flex-wrap py-[60px] md:py-[100px]">
        <CardShops img={i1} title={'Amazon'}/>
        <CardShops img={i2} title={'Amazon'}/>
        <CardShops img={i3} title={'Amazon'}/>
        <CardShops img={i4} title={'Amazon'}/>
        <CardShops img={i5} title={'Amazon'}/>
        <CardShops img={i6} title={'Amazon'}/>
        <CardShops img={i7} title={'Amazon'}/>
        <CardShops img={i8} title={'Amazon'}/>
        <CardShops img={i9} title={'Amazon'}/>
        <CardShops img={i10} title={'Amazon'}/>
        <CardShops img={i11} title={'Amazon'}/>
        <CardShops img={i12} title={'Amazon'}/>
        <CardShops img={i13} title={'Amazon'}/>
        <CardShops img={i14} title={'Amazon'}/>
        <CardShops img={i15} title={'Amazon'}/>
        <CardShops img={i16} title={'Amazon'}/>
        <CardShops img={i17} title={'Amazon'}/>
        <CardShops img={i18} title={'Amazon'}/>
        <CardShops img={i19} title={'Amazon'}/>
        <CardShops img={i20} title={'Amazon'}/>
        <CardShops img={i21} title={'Amazon'}/>
        <CardShops img={i22} title={'Amazon'}/>
        <CardShops img={i23} title={'Amazon'}/>
        <CardShops img={i24} title={'Amazon'}/>
        <CardShops img={i25} title={'Amazon'}/>
        <CardShops img={i26} title={'Amazon'}/>
        <CardShops img={i27} title={'Amazon'}/>
        <CardShops img={i28} title={'Amazon'}/>
        <CardShops img={i29} title={'Amazon'}/>
        <CardShops img={i30} title={'Amazon'}/>
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

export default Shops