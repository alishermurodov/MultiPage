import React, { useEffect } from 'react'
import ButtonAll from '../../components/ButtonAll'
import s1Img from '../../assets/homeImg/s1Img.png'
import tShirt from '../../assets/homeImg/t-shirt.png'
import jeans from '../../assets/homeImg/jeans.png'
import advantage from '../../assets/homeImg/advantage.png'
import s2Img from '../../assets/homeImg/s2Img.png'
import mailRussia from '../../assets/homeImg/mailRussia.png'
import EMSrussia from '../../assets/homeImg/EMSrussia.png'
import s51 from '../../assets/homeImg/s51.png'
import s52 from '../../assets/homeImg/s52.png'
import s53 from '../../assets/homeImg/s53.png'
import s54 from '../../assets/homeImg/s54.png'
import s6Img from '../../assets/homeImg/s6Img.png'
import s71 from '../../assets/homeImg/s71.png'
import s72 from '../../assets/homeImg/s72.png'
import s73 from '../../assets/homeImg/s73.png'
import s81 from '../../assets/homeImg/s81.png'
import s82 from '../../assets/homeImg/s82.png'
import s83 from '../../assets/homeImg/s83.png'
import s84 from '../../assets/homeImg/s84.png'

//component
import SwiperSmall from '../../components/homeComponents/SwiperSmall'
import SwiperS2 from '../../components/homeComponents/SwiperS2'
import SelectCities from '../../components/homeComponents/Select'
import CardUK from '../../components/homeComponents/CardUK'
import CardGood from '../../components/homeComponents/CardGood'
import CardRating from '../../components/homeComponents/CardRating'

//transition
import { useTranslation } from 'react-i18next'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';




const Home = () => {

  const { t, i18n } = useTranslation()
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <div className="w-[90%] md:w-[94%] mx-auto">
      <div  className=" mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[50px] px-[20px] md:px-0">
        <div data-aos="fade-up" data-aos-duration="3000" className="md:w-[85%] mx-auto md:flex items-center justify-between">
          <div className="sm:w-[70%] md:w-[53%] mb-[50px] md:mb-[0]">
            <h1  className='text-[33px] lg:text-[40px] xl:text-[52px] 2xl:text-[62px] font-[700] text-[#fff]  mb-[10px]'>{t("navbar.Delivery of goods from the UK to Russia")}</h1>
            <p className='text-[#fff] text-[12px] lg:text-[18px] mb-[30px]'>{t("navbar.Start saving up to 80% on shopping. Register with OkeyPost to buy clothes, shoes, gadgets from famous brands at discounts in the UK and safely send items to Russia.")}</p>
            <ButtonAll name={'Получить адрес в UK'} />
          </div>
          <img className='w-[80%] mx-auto md:w-[40%] md:mx-0' src={s1Img} alt="" />
        </div>
      </div>
      <div className="w-90% md:w-[80%] mx-auto py-[60px] md:py-[90px] lg:py-[160px] dark:text-[#fff]">
        <h3  className='mb-[40px] text-[28px] md:text-[35px] lg:text-[44px] font-bold text-center md:text-start '>Насколько выгодно <br /> покупать?</h3>
        <SwiperSmall data-aos="flip-up" />
        <SwiperS2 />
        <div className="md:flex items-center justify-between mt-[20px] mb-[60px] md:mb-[160px]">
          <img className='mb-[25px] mx-auto md:mx-0' src={tShirt} alt="" />
          <div className="mb-[25px] text-center">
            <p className='text-[#1F2428] dark:text-[#fff]'>Срок доставки примерно 10 дней</p>
            <p className='text-[26px] font-medium'>Вы экономите до <span className='text-[#01CD7D]'>$119.56</span></p>
          </div>
          <img className='mb-[25px] mx-auto md:mx-0' src={jeans} alt="" />
        </div>
        <div data-aos="flip-up" data-aos-duration="1000" className="">
          <img src={advantage} alt="" />
        </div>
      </div>
      <div className=" mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[40px] px-[20px] md:px-0">
        <div className="md:w-[85%] mx-auto md:flex items-center justify-between">
          <img data-aos="flip-left" data-aos-duration="1000" className='w-[80%] mx-auto md:w-[25%]' src={s2Img} alt="" />
          <div className="sm:w-[70%] md:w-[60%] mb-[50px] md:mb-[0]">
            <h1 data-aos="flip-up" data-aos-duration="1000" className='text-[19px] lg:text-[28pxpx] xl:text-[30px] font-[700] text-[#fff]  mb-[10px]'>Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.</h1>
            <p className='text-[#fff] text-[12px] lg:text-[18px] mb-[30px]'>Такой способ покупки также подойдёт, если магазин принимает только английские карты.</p>
            <ButtonAll  name={'Попробовать'} />
          </div>
        </div>
      </div>
      <div className="w-90% md:w-[80%] mx-auto py-[70px] md:py-[130px] ">
        <h3 className=' text-[28px] md:text-[35px] lg:text-[44px] font-bold text-center md:text-start dark:text-[#fff] mb-[20px]'>OkeyPost удобная и быстрая доставка <br /> посылок из Великобритании </h3>
        <p className='md:w-[60%] text-[#1F2428] mb-[50px] dark:text-[#fff]'>Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам надежно упакованными.</p>
        <div className="py-[50px] px-[35px] bg-[#fff] rounded-[16px] mb-[80px]" style={{ boxShadow: '0px 4px 8px 0px #cbc6c6' }}>
          <div className="flex flex-wrap  justify-between">
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
        <div className="">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] md:w-[50%] mb-[15px]'>4 простых шага для ваших покупок в Великобритании </h3>
          <div className="flex flex-wrap justify-between mb-[49px]">
            <CardUK imgg={s51} title={'ВЫ ВЫБИРАЕТЕ ТОВАР'} desc={'в английском магазине, оплачиваете и указываете адрес склада OkeyPost'} />
            <CardUK imgg={s52} title={'ПОКУПКИ ПРИХОДЯТ НА СКЛАД'} desc={'в английском магазине, оплачиваете и указываете адрес склада OkeyPost'} />
            <CardUK imgg={s53} title={'ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ'} desc={'в английском магазине, оплачиваете и указываете адрес склада OkeyPost'} />
            <CardUK imgg={s54} title={'ЗАБИРАЕТЕ свою ПОСЫЛКУ'} desc={'в английском магазине, оплачиваете и указываете адрес склада OkeyPost'} />
          </div>
          <p className='md:w-[65%] text-[#1F2428] mb-[30px] dark:text-[#fff] md:text-[20px]'>Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас.</p>
          <ButtonAll name={'Быстрая покупка'} />
        </div>
      </div>
      <div className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[40px] px-[20px] md:px-0">
        <div className="md:w-[85%] mx-auto md:flex items-center justify-between">
          <img className='w-[80%] mx-auto md:w-[25%]' src={s6Img} alt="" />
          <div className="sm:w-[70%] md:w-[60%] mb-[50px] md:mb-[0]">
            <h1 className='text-[19px] lg:text-[28pxpx] xl:text-[30px] font-[700] text-[#fff]  mb-[10px]'>Виртуальный тур по нашему складу в реальном времени</h1>
            <p className='text-[#fff] text-[12px] lg:text-[18px] mb-[30px]'>Вы можете всегда посмотреть на нашу слаженую работу на складе</p>
            <ButtonAll name={'Попробовать'} />
          </div>
        </div>
      </div>
      <div className="w-90% md:w-[80%] mx-auto py-[70px] md:py-[130px] ">
        <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] md:w-[59%] mb-[15px]'>120 000 довольных клиентов в России уже сделали свой выбор</h3>
        <p className='dark:text-[#fff] text-[12px] lg:text-[18px] mb-[40px] md:w-[48%]'>За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва</p>
        <div className="flex flex-wrap justify-between mb-[80px]">
          <CardGood imgg={s71} title={'Больше не значит дороже'} desc={'За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва'} />
          <CardGood imgg={s72} title={'Быстрая обработка посылок'} desc={'За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва'} />
          <CardGood imgg={s73} title={'SMS-уведомления'} desc={'За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва'} />
        </div>
        <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] md:w-[59%]'>Отзывы и цитаты блогеров:</h3>
        <div className="sm:flex flex-wrap justify-between py-[50px]">
          <CardRating img={s81} name={'NIKOLAY S'} desc={'Ваша доставка самая быстрая и дешёвая!!!'} />
          <CardRating img={s82} name={'NIKOLAY S'} desc={'Ваша доставка самая быстрая и дешёвая!!!'} />
          <CardRating img={s83} name={'NIKOLAY S'} desc={'Ваша доставка самая быстрая и дешёвая!!!'} />
          <CardRating img={s84} name={'NIKOLAY S'} desc={'Ваша доставка самая быстрая и дешёвая!!!'} />
        </div>
        <div className="mb-[100px]">
          <ButtonAll name={'Все отзывы'} />
        </div>
        <div className="mb-[15px]">
          <h3 className=' text-[28px] md:text-[35px] font-bold text-center md:text-start dark:text-[#fff] '>Ваш личный адрес в Великобритании  для покупок</h3>
          <p className='dark:text-[#fff] text-[#1F2428]'>
            С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда получаете максимальную выгоду! <br /><br />

            При доставке из UK в Россию все ваши товары обязательно страхуются. Прием посылок на наш склад, их обработка, удаление лишних коробок, хранение сроком до 70 дней – у нас полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну. Это необходимо для снижения стоимости доставки посылок из UK в Россию.<br /><br />

            У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть какие-то особенные требования, вроде проверки техники или дополнительной пленки для самых хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу.<br /><br />

            Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда найдете информацию о лучших скидках fyukbqcrb[ магазинов. Не обязательно заходить в Черную пятницу или Prime Day, крутые акции проходят каждый день!
          </p>
        </div>
      </div>
      <div className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px]">
        <div className="md:w-[85%] mx-auto md:flex items-center justify-between">
          <h3 className=' text-[22px] md:text-[30px] font-bold text-center md:text-start text-[#fff] md:w-[38%]'>Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!</h3>
          <input type="email" className='outline-none pb-[10px] bg-inherit border-b-[1px] border-[#fff] text-[#fff] mx-auto md:mx-0' placeholder='Введите ваш email' />
          <ButtonAll name={'Подписаться'}/>
        </div>
      </div>
    </div>
  )
}

export default Home