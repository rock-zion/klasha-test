import React from 'react';

const ChevronLeft = props => {
  const { colors = 'black' } = props;
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g id='Icon/Normal/Chevron-left'>
        <path
          id='Vector'
          d='M15 18L9 12L15 6'
          stroke={colors}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default ChevronLeft;
