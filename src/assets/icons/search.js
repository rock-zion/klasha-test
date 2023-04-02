import React from 'react';

const Search = props => {
  const { colors = '#0A0A0A' } = props;
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle
        cx='10.5'
        cy='10.3235'
        r='6.5'
        stroke={colors}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M15.5 15.8235L21 21.8235'
        stroke={colors}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default Search;
