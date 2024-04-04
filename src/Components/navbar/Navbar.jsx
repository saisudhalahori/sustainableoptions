import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input type="text"placeholder='search..'/>
            <SearchIcon className='icon'/>
          </div>
          <div className="items">
            <div className="item">
           <LanguageIcon className='icon' />
           English
            </div>
            <div className="item">
           <DarkModeIcon className='icon' />
            </div>
            <div className="item">
           <FullscreenExitIcon  className='icon' />
            </div>
            <div className="item">
           <NotificationsNoneIcon className='icon' />
           <div className="counter">1</div>
            </div>
            <div className="item">
           <ChatBubbleOutlineIcon className='icon' />
           <div className="counter">2</div>
            </div>
            <div className="item">
           <MenuIcon className='icon' />
            </div>
            <div className="item">
           <img src='../Public/avatar img.jpg' alt='' className='avatar'
           />

            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar