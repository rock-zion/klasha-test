import React from 'react';

const ArrowDown = props => {
  const { colors = 'black' } = props;
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g id='Icon/Normal/Arrow-down'>
        <path
          id='Vector'
          d='M12 5V19'
          stroke={colors}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_2'
          d='M19 12L12 19L5 12'
          stroke={colors}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default ArrowDown;
