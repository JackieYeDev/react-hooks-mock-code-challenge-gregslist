import React from 'react';
import Search from './Search';

function Header({ onFilterSubmit }) {
  return (
    <header>
      <h1>
        <span className='logo' role='img'>
          ☮
        </span>
        gregslist
      </h1>
      <Search onFilterSubmit={onFilterSubmit} />
    </header>
  );
}

export default Header;
