import React, { useEffect } from 'react'
import ButtonAll from '../../components/ButtonAll'
import img1 from '../../assets/saleImg/img1.png'
import img2 from '../../assets/saleImg/img2.png'
import img3 from '../../assets/saleImg/img3.png'
import img4 from '../../assets/saleImg/img4.png'
import img5 from '../../assets/saleImg/img5.png'
import img6 from '../../assets/saleImg/img6.png'
import img7 from '../../assets/saleImg/img7.png'
import img8 from '../../assets/saleImg/img8.png'
import img9 from '../../assets/saleImg/img9.png'
import img10 from '../../assets/saleImg/img10.png'
import whatsup from '../../assets/whatsup.png'
import viber from '../../assets/viber.png'
import chat from '../../assets/chat.png'

//
import CardThings from '../../components/SaleComponents/CardThings'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sale = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='w-[90%] md:w-[94%] mx-auto '>
      <div data-aos="fade-down" data-aos-duration="1000" className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px] ">
        <div className="md:w-[80%] mx-auto px-[20px] md:px-0">
          <p className='opacity-[.6] text-[#fff] text-[12px] mb-[29px]'>Главная  /  Как покупать</p>
          <h3 className=' text-[22px] md:text-[30px] font-bold mb-[9px] text-[#fff]'>Распродажи</h3>
          <p className='text-[24px] text-[#fff] mb-[40px] font-bold'>ранний доступ к распродажам в магазинах</p>
          <ButtonAll name={'Получить адрес в UK'} />
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto py-[80px] md:py-[120px]">
        <h3 className=' text-[22px] md:text-[40px] font-bold mb-[40px] dark:text-[#fff] md:w-[50%]'>Black Friday Early Access
          ранний доступ к распродажам
          в магазинах Великобритании!
        </h3>
        <div className="md:flex flex-wrap justify-between items-center">
          <CardThings img={img1}/>
          <CardThings img={img2}/>
          <CardThings img={img3}/>
          <CardThings img={img4}/>
          <CardThings img={img5}/>
          <CardThings img={img6}/>
          <CardThings img={img7}/>
          <CardThings img={img8}/>
          <CardThings img={img9}/>
          <CardThings img={img10}/>
        </div>
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

export default Sale