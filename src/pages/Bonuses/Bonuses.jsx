import React from 'react'
import ButtonAll from '../../components/ButtonAll'
import CardHalp from '../../components/bonusComp/Card1'

//img
import s1 from '../../assets/bonusImg/s1.png'
import s2 from '../../assets/bonusImg/s2.png'
import s3 from '../../assets/bonusImg/s3.png'
import s4 from '../../assets/bonusImg/s4.png'
import s5 from '../../assets/bonusImg/s5.png'
import bonusImg from '../../assets/bonusImg/bonusImg2.png'

const Bonuses = () => {
  return (
    <div className='w-[90%] md:w-[94%] mx-auto '>
      <div className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px] mb-[60px] md:mb-[100px]">
        <div className="md:w-[80%] mx-auto px-[20px] md:px-0">
          <p className='opacity-[.6] text-[#fff] text-[12px] mb-[29px]'>Главная  /  Как покупать</p>
          <h3 className=' text-[22px] md:text-[48px] font-bold mb-[9px] text-[#fff]'>Бонусы и партнёрская программа</h3>
          <p className='text-[24px] text-[#fff] mb-[40px] font-bold'>Платим $3 с каждой отправленной посылки</p>
          <ButtonAll name={'Начать зарабатывать'} />
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto mb-[70px] md:mb-[120px] lg:mb-[160px]">
        <div className="">
          <h3 className=' text-[28px] md:text-[44px] font-bold text-center md:text-start dark:text-[#fff] mb-[40px]'>Зарабатывать с нами — проще простого:</h3>
          <div className="md:flex flex-wrap items-center justify-between">
            <CardHalp imgg={s1} title={'Дарим скидку 10% вашим друзьям и подписчикам'} desc={'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.'} />
            <CardHalp imgg={s1} title={'Дарим скидку 10% вашим друзьям и подписчикам'} desc={'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.'} />
            <CardHalp imgg={s1} title={'Дарим скидку 10% вашим друзьям и подписчикам'} desc={'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.'} />
            <CardHalp imgg={s1} title={'Дарим скидку 10% вашим друзьям и подписчикам'} desc={'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.'} />
            <CardHalp imgg={s1} title={'Дарим скидку 10% вашим друзьям и подписчикам'} desc={'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.'} />
          </div>
        </div>
      </div>
      <div className=" mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[40px] px-[20px] md:px-0">
        <div className="md:w-[85%] mx-auto md:flex items-center justify-between">
          <img className='w-[80%] mx-auto md:w-[25%]' src={bonusImg} alt="" />
          <div className="sm:w-[70%] md:w-[60%] mb-[50px] md:mb-[0]">
            <h1 className='text-[19px] lg:text-[28pxpx] xl:text-[30px] font-[700] text-[#fff]  mb-[10px]'>Готовы начать зарабатывать вместе с нами?</h1>
            <p className='text-[#fff] text-[12px] lg:text-[18px] mb-[30px]'>Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!</p>
            <ButtonAll name={'Попробовать'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bonuses