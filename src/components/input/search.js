import Search from 'assets/icons/search';
import React from 'react';
import style from './search-style.module.scss';

const CustomSearch = props => {
  const { value, placeholder = 'Search', handleChange } = props;
  return (
    <div className={style.wrapper}>
      <input
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        className={style.input}
      />
      <div className={style.icon_wrapper}>
        <Search />
      </div>
    </div>
  );
};

export default CustomSearch;
