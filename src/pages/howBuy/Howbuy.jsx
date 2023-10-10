import React, { useEffect } from 'react'
import ButtonAll from '../../components/ButtonAll'
import CardMain from '../../components/BuyComponents/CardMain'
import img1 from '../../assets/buyImg/img1.png'
import img2 from '../../assets/buyImg/img2.png'
import img3 from '../../assets/buyImg/img3.png'
import img4 from '../../assets/buyImg/img4.png'
import img5 from '../../assets/buyImg/img5.png'
import i1 from '../../assets/buyImg/1.png'
import i2 from '../../assets/buyImg/2.png'
import i3 from '../../assets/buyImg/3.png'
import i4 from '../../assets/buyImg/4.png'
import i5 from '../../assets/buyImg/5.png'
import whatsup from '../../assets/whatsup.png'
import viber from '../../assets/viber.png'
import chat from '../../assets/chat.png'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Howbuy = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='w-[90%] md:w-[94%] mx-auto '>
      <div data-aos="zoom-in" data-aos-duration="1000" className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px] mb-[100px]">
        <div className="md:w-[80%] mx-auto px-[20px] md:px-0">
          <p className='opacity-[.6] text-[#fff] text-[12px] mb-[29px]'>Главная  /  Как покупать</p>
          <h3 className=' text-[22px] md:text-[30px] font-bold mb-[9px] text-[#fff]'>Научим покупать вВеликобритании!</h3>
          <p className='text-[24px] text-[#fff] mb-[40px] font-bold'>и экономить до 70%</p>
          <ButtonAll name={'Получить адрес в UK'} />
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" className="w-[90%] md:w-[80%] mx-auto mb-[120px]">
        <h3 className=' text-[22px] md:text-[30px] font-bold mb-[9px] dark:text-[#fff]'>Научим покупать в Великобритании!</h3>
        <p className='md:w-[63%] dark:text-[#fff]'>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.</p>
        <div className="py-[53px] mb-[-40px]">
          <CardMain img={img1} img2={i1} title={'Получаем адрес для покупок в магазинах Великобритании '} desc={'Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.'}/>
          <CardMain img={img2} img2={i2} title={'Идём за покупками в онлайн-магазины'} desc={'Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, что покупать нельзя.'}/>
          <CardMain img={img3} img2={i3} title={'Следим за перемещением посылки до склада'} desc={'После оформление заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.'}/>
          <CardMain img={img4} img2={i4} title={'Оплачиваем доставку и покупки отправляются домой'} desc={'Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то еще в других магазинах и отправить все одной посылкой (так выгоднее). До 30 дней покупки будут храниться бесплатно. Когда все товары поступили на склад, выбирайте способ доставки, мы надежно все упакуем и отправим вам, сообщив трек-номер.'}/>
          <CardMain img={img5} img2={i5} title={'Получаем посылку и спешим сделать новый заказ'} desc={'Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся :)'}/>
        </div>
        <ButtonAll name={'Получить адрес в UK'}/>
      </div>
      <div data-aos="flip-up" data-aos-duration="1000" className="  mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] rounded-[36px] py-[30px] md:py-[60px]">
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

export default Howbuy