/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const videos = useInitialState(API);

  const renderList = (list = []) => {
    return (
      <>
        {list.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </>
    );
  };

  return (
    <>
      <Search />
      {videos.myList && videos.myList.length > 0 && (
        <Categories title='My List'>
          <Carousel>{renderList(videos.myList)}</Carousel>
        </Categories>
      )}
      {videos.trends && videos.trends.length > 0 && (
        <Categories title='Trending'>
          <Carousel>{renderList(videos.trends)}</Carousel>
        </Categories>
      )}
      {videos.originals && videos.originals.length > 0 && (
        <Categories title='Originals '>
          <Carousel>{renderList(videos.originals)}</Carousel>
        </Categories>
      )}
    </>
  );
};

export default Home;
