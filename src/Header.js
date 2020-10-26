import React from 'react'
import image from "./images/logo.jpeg"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StoreIcon from '@material-ui/icons/Store';
import "./Header.css"
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import { useStateValue } from './StateProvider';




function Header() {

  const [{user},dispatch]=useStateValue();
  
  return (
    <div className="header">
      <div className="header__left">
        <img src={image} alt="logo"/>
        <div className="header__input">
          <input type="text" placeholder="Search"/>
          <IconButton>
          <SearchIcon/>
          </IconButton>
        </div>
      </div>

      <div className="header__middle">
      <div className="header__options">
        <HomeIcon fontSize="large"/>
      </div>
      <div className="header__options">
        <FlagIcon fontSize="large"/>
      </div>
      <div className="header__options">
        <StoreIcon fontSize="large"/>
      </div>
      </div>
      <div className="header__right">
        
      <div className="header__left"></div>
        <div className="header__info">
          <Avatar src={user.photoURL}/>
        <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon/>
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
      </div>
    </div>
    
  )
}

export default Header;
