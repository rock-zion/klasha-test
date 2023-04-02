import React from 'react';

const FilterIcon = props => {
  const { colors = '#0A0A0A' } = props;
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 8H12'
        stroke={colors}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6.66675 11.3333H9.33341'
        stroke={colors}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2 4.66667H14'
        stroke={colors}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default FilterIcon;
