import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Register</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Name' />
        <input className='input' type='text' placeholder='Email' />
        <input className='input' type='password' placeholder='Password' />
        <button type='button' className='button'>Register</button>
      </form>
      <Link to='/login'>Login</Link>
    </section>
  </section>
);

export default Register;