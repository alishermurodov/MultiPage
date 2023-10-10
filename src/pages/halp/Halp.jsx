import React from 'react'
import ButtonAll from '../../components/ButtonAll'
import CardHalp from '../../components/bonusComp/Card1'
import Accorde from '../../components/halpComp/Accord'
import whatsup from '../../assets/whatsup.png'
import viber from '../../assets/viber.png'
import chat from '../../assets/chat.png'

const Halp = () => {
  return (
    <div className='w-[90%] md:w-[94%] mx-auto '>
      <div className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px] ">
        <div className="md:w-[80%] mx-auto px-[20px] md:px-0">
          <p className='opacity-[.6] text-[#fff] text-[12px] mb-[29px]'>Главная  /  Как покупать</p>
          <h3 className=' text-[22px] md:text-[30px] font-bold mb-[9px] text-[#fff]'>Отвечаем на вопросы доставки</h3>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto py-[60px] md:py-[100px]">
        <div className="md:p-[40px] bg-[#fff] rounded-[16px] mb-[60px] md:mb-[100px]" style={{ boxShadow: "0px 0px 70px 0px rgba(138, 138, 138, 0.10)" }}>
          <h3 className='font-bold mb-[27px]'>Поиск в вопросах и ответах:</h3>
          <input type="search" className='outline-none border-b-[1px] pb-[25px] w-[100%] text-[19px]' placeholder='Введите свой вопрос...' />
        </div>
        <div className="mb-[60px] md:mb-[140px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[33px]'>Виртуальный адрес в Великобритании</h3>
          <Accorde/>
        </div>
        <div className="mb-[60px] md:mb-[140px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[33px]'>Покупки в магазинаx Англии, скидки и промкода</h3>
          <Accorde/>
        </div>
        <div className="mb-[60px] md:mb-[140px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[33px]'>Доставка из Англии</h3>
          <Accorde/>
        </div>
        <div className="mb-[60px] md:mb-[140px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[33px]'>Оплата</h3>
          <Accorde/>
        </div>
        <div className="mb-[60px] md:mb-[140px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[33px]'>Общие вопросы</h3>
          <Accorde/>
        </div>
        <div className="mb-[60px] md:mb-[140px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] mb-[33px]'>Посылки</h3>
          <Accorde/>
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

export default Halp