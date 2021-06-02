import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='main'>
    <h2 className='main__title'>What would you like to see today?</h2>
    <input type='text' className='input' placeholder='Buscar...' />
  </section>
);

export default Search;
