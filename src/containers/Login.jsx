import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Login.scss';

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Login</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Email' />
        <input className='input' type='password' placeholder='Password' />
        <button type='button' className='button'>Sign in</button>
        <div className='login__container--remember-me'>
          <label htmlFor='cbox1'>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            Remember me
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='google' />
          {' '}
          Sign in with Google
        </div>
        <div>
          <img src={twitterIcon} alt='twitter' />
          {' '}
          Sign in with Twitter
        </div>
      </section>
      <p className='login__container--register'>
        Do not have an account?
        {' '}
        <Link to='/register'>Register</Link>
      </p>
    </section>
  </section>
);

export default Login;