import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <img className='header__img' src='../assets/img/logo-platzi-video-BW2.png' alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='../assets/user-icon.png' alt='' />
        <p>Profile</p>
      </div>
      <ul>
        <li><a href='/'>Account</a></li>
        <li><a href='/'>Sign out</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
