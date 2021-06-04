import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Login.scss';

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => {
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Login</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleInput}
          />
          <input
            className='input'
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleInput}
          />
          <button type='submit' className='button'>Sign in</button>
          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Remember me
            </label>
            <a href='/'>Forgot your password?</a>
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
};

export default Login;
