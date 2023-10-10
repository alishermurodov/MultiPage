import React, { useEffect } from 'react'
import img1 from '../../assets/priceImg/img1.png'
import img2 from '../../assets/priceImg/img2.png'
import img3 from '../../assets/priceImg/img3.png'
import img4 from '../../assets/priceImg/img4.png'
import img5 from '../../assets/priceImg/img5.png'
import EMS from '../../assets/priceImg/EMS.png'
import mailRussia from '../../assets/homeImg/mailRussia.png'
import EMSrussia from '../../assets/homeImg/EMSrussia.png'
import whatsup from '../../assets/whatsup.png'
import viber from '../../assets/viber.png'
import chat from '../../assets/chat.png'
import CardsTop from '../../components/priceComponents/CardsTop'
import SelectCities from '../../components/homeComponents/Select'
import ButtonAll from '../../components/ButtonAll'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Prices = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='w-[90%] md:w-[94%] mx-auto '>
      <div className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px] ">
        <div className="md:w-[80%] mx-auto px-[20px] md:px-0">
          <p className='opacity-[.6] text-[#fff] text-[12px] mb-[29px]'>Главная  /  Как покупать</p>
          <h3 className=' text-[22px] md:text-[30px] font-bold mb-[9px] text-[#fff]'>Услуги доставки из Великобритании</h3>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto py-[60px] md:py-[100px]">
        <div className="md:flex flex-wrap justify-between items-center mb-[80px] md:mb-[140px]">
          <CardsTop img={img1} title={'Ваш личный адрес для покупок'} desc={'на нашем современном автоматизированном складе в безналоговом Делавэре'} />
          <CardsTop img={img2} title={'Объединение нескольких  в одну'} desc={'на нашем современном автоматизированном складе в безналоговом Делавэре'} />
          <CardsTop img={img3} title={'Усиленная упаковка по '} desc={'на нашем современном автоматизированном складе в безналоговом Делавэре'} />
          <CardsTop img={img4} title={' входящих посылок 30 дней'} desc={'на нашем современном автоматизированном складе в безналоговом Делавэре'} />
        </div>
        <h3 className=' text-[28px] md:text-[35px] lg:text-[44px] font-bold text-center md:text-start dark:text-[#fff] mb-[20px]'>Онлайн-калькулятор <br /> стоимости доставки товара</h3>
        <p className='md:w-[60%] text-[#1F2428] mb-[50px] dark:text-[#fff]'>Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки вашей посылки из Англии.</p>
        <div data-aos="flip-up" data-aos-duration="1000" className="py-[50px] px-[35px] bg-[#fff] rounded-[16px] mb-[80px]" style={{ boxShadow: '0px 4px 8px 0px #cbc6c6' }}>
          <div data-aos="flip-up" data-aos-duration="1000" className="flex flex-wrap  justify-between">
            <SelectCities valu={'Россия'} name={'Страна:'} />
            <SelectCities valu={'Москва'} name={'Город:'} />
            <SelectCities valu={'Введите индекс'} name={'Индекс:'} />
            <SelectCities valu={'0,5'} name={'Вес посылки:'} />
            <SelectCities valu={'Выберите услуги'} name={'Дополнительные услуги:'} />
          </div>
          <div className="flex justify-center md:justify-start">
            <ButtonAll name={'Рассчитать'} />
          </div>
        </div>
        <div className="mb-[60px] md:mb-[100px] lg:mb-[170px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[20px]'>Варианты доставки:</h3>
          <div className="flex flex-col">
            <img className='mb-[20px]' src={mailRussia} alt="" />
            <img className='mb-[20px]' src={EMSrussia} alt="" />
            <img className='mb-[20px]' src={mailRussia} alt="" />
          </div>
        </div>
        <div className="mb-[60px] md:mb-[100px] lg:mb-[170px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[20px]'>Услуги склада</h3>
          <div className="flex flex-col">
            <img className='mb-[20px]' src={mailRussia} alt="" />
            <img className='mb-[20px]' src={EMSrussia} alt="" />
            <img className='mb-[20px]' src={mailRussia} alt="" />
            <img className='mb-[20px]' src={EMS} alt="" />
            <img className='mb-[20px]' src={EMS} alt="" />
            <img className='mb-[20px]' src={EMS} alt="" />
            <img className='mb-[20px]' src={EMS} alt="" />
            <img className='mb-[20px]' src={EMS} alt="" />
            <img className='mb-[20px]' src={EMS} alt="" />
          </div>
        </div>
        <div className="mb-[60px] md:mb-[100px] lg:mb-[150px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[20px]'>Покупки с операторами Okeypost.com</h3>
          <div className="flex flex-col">
            <img className='mb-[20px]' src={mailRussia} alt="" />
            <img className='mb-[20px]' src={EMSrussia} alt="" />
          </div>
        </div>
      </div>
      <div className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px]">
        <div className="md:w-[85%] mx-auto md:flex items-center justify-between px-[20px]">
          <img className='md:w-[25%]' src={img5} alt="" />
          <div className="md:w-[65%] ">
            <h3 className=' text-[22px] md:text-[30px] font-bold  text-[#fff] md:w-[90%] mb-[40px]'>Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!</h3>
            <input type="email" className='w-[60%] outline-none pb-[10px] bg-inherit border-b-[1px] border-[#fff] text-[#fff] mx-auto md:mx-0 mb-[35px]' placeholder='Введите ваш email' />
            <div className="md:flex gap-[50px]">
              <ButtonAll name={'Подписаться'} />
              <p className='text-[#fff] md:w-[60%] mt-[20px] md:mt-0'>Нажимая на кнопку вы подтверждаете согласие с правилами предоставления услуги и политикой конфиденциальности</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto py-[60px] md:py-[140px]">
        <div className="mb-[60px] md:mb-[100px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[20px]'>Страхование</h3>
          <div className="flex flex-col">
            <img className='mb-[20px]' src={mailRussia} alt="" />
            <img className='mb-[20px]' src={EMSrussia} alt="" />
          </div>
        </div>
        <div className="">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[20px]'>Дополнительная упаковка</h3>
          <div className="flex flex-col">
            <img className='mb-[20px]' src={mailRussia} alt="" />
            <img className='mb-[20px]' src={EMSrussia} alt="" />
            <img className='mb-[20px]' src={EMSrussia} alt="" />
          </div>
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

export default Prices