import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <Link class='title' to='/'>
        <h1>Star Wars Lore</h1>
      </Link>
      <div class='border flex-container'>
        <Link class='button' to='/people'>
          <h3>People</h3>
        </Link>
        <Link class='button' to='/planets'>
          <h3>Planets</h3>
        </Link>
      </div>
    </>
  );
};

export default Menu;
