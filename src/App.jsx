import './App.css'
import Burger from './components/Burger'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react"
import Switcher from './components/Switcher'
import { useTranslation } from "react-i18next"
import { IconButton } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Howbuy from './pages/howBuy/Howbuy';
import Sale from './pages/sale/Sale';
import Prices from './pages/prices/prices';
import Halp from './pages/halp/halp';
import Bonuses from './pages/Bonuses/Bonuses';
import Blog from './pages/Blog/Blog';
import Shops from './pages/shops/Shops';
import NotFound from './pages/notFound/NotFound';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "howBuy",
          element: <Howbuy />
        },
        {
          path: "sale",
          element: <Sale />
        },
        {
          path: "prices",
          element: <Prices />
        },
        {
          path: "halp",
          element: <Halp />
        },
        {
          path: "bonusses",
          element: <Bonuses />
        },
        {
          path: "blog",
          element: <Blog />
        },
        {
          path: "shops",
          element: <Shops />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
    
      //<div className="dark:bg-[black]">
      //  <h1 className="text-3xl font-bold underline dark:bg-blue-950 dark:text-[#FFF]" data-aos="fade-right">
      //    Hello world!
      //  </h1>
      //  <Burger />
      //  <Switcher />
      //  <h1 className='dark:text-[#fff]'>{t("hello")}</h1>
      //  <div className='flex'>
      //    <IconButton onClick={() => changeLanguage("en")}><TranslateIcon></TranslateIcon>En</IconButton>
      //    <IconButton onClick={() => changeLanguage("ru")}><TranslateIcon></TranslateIcon>Ru</IconButton>
      //  </div>
      //</div>


  )
}

export default App