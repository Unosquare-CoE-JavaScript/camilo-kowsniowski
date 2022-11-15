import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <>
      <div className='home'>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        &nbsp;
        <h2>Welcome to the lore</h2>
        &nbsp;
        <div className='img'></div>
      </div>
    </>
  );
};

export default Home;
