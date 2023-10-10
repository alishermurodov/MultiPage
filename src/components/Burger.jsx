import * as React from 'react';
import '../App.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

//icons
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SellIcon from '@mui/icons-material/Sell';
import QuizIcon from '@mui/icons-material/Quiz';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import WidgetsIcon from '@mui/icons-material/Widgets';
import StoreIcon from '@mui/icons-material/Store';
import Switcher from './Switcher';
import { useTranslation } from 'react-i18next'




export default function Burger() {
  const [state, setState] = React.useState({
    right: false,
  });

  const pathname = useLocation();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { t, i18n } = useTranslation()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const list = (anchor) => (
    <div className="dark:bg-[#151532]">
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, true)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <div className="">

            <Switcher />
          </div>
          <div className="flex justify-center">
            <select className='rounded-[10px] p-[7px] mx-auto' onChange={(e) => changeLanguage(e.target.value)}>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
          </div>

          <NavLink to="/howBuy" activeClassName="active-link">
            <ListItemButton>
              <ListItemIcon>
                <ShoppingBagIcon />
              </ListItemIcon>
              <ListItemText>
                <p className='dark:text-[#fff]'>Как покупать</p>
              </ListItemText>
            </ListItemButton>
          </NavLink>

          <NavLink to="/sale" activeClassName="active-link">
            <ListItemButton>
              <ListItemIcon>
                <LoyaltyIcon />
              </ListItemIcon>
              <ListItemText>
                <p className='dark:text-[#fff]'>Распродажи</p>
              </ListItemText>
            </ListItemButton>
          </NavLink>

          <NavLink to="/prices" activeClassName="active-link">
            <ListItemButton>
              <ListItemIcon>
                <SellIcon />
              </ListItemIcon>
              <ListItemText>
                <p className='dark:text-[#fff]'>Цены</p>
              </ListItemText>
            </ListItemButton>
          </NavLink>

          <NavLink to="/halp" activeClassName="active-link">
            <ListItemButton>
              <ListItemIcon>
                <QuizIcon />
              </ListItemIcon>
              <ListItemText>
                <p className='dark:text-[#fff]'>Помощь</p>
              </ListItemText>
            </ListItemButton>
          </NavLink>

          <NavLink to="/bonusses" activeClassName="active-link">
            <ListItemButton>
              <ListItemIcon>
                <AlignVerticalBottomIcon />
              </ListItemIcon>
              <ListItemText>
                <p className='dark:text-[#fff]'>Бонусы</p>
              </ListItemText>
            </ListItemButton>
          </NavLink>

          <NavLink to="/blog" activeClassName="active-link">
            <ListItemButton>
              <ListItemIcon>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText>
                <p className='dark:text-[#fff]'>Блог</p>
              </ListItemText>
            </ListItemButton>
          </NavLink>

          <NavLink to="/shops" activeClassName="active-link">
            <ListItemButton>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText>
                <p className='dark:text-[#fff]'>Магазины</p>
              </ListItemText>
            </ListItemButton>
          </NavLink>
        </List>
        <Divider />
        {/* Remaining code for the drawer */}
      </Box>
    </div>
  );

  return (
    <div className=''>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <IconButton sx={{ color: 'gray' }}>
              <MenuIcon />
            </IconButton>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
