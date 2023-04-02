import React from 'react';

const Wallet = props => {
  const { colors = '#0A0A0A' } = props;
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.37685 5.92566L3.375 18.5C3.375 18.8978 3.375 19.625 3.37596 20C3.74874 20 4.47717 20 4.875 20H19.875C20.0739 20 20.625 20 20.625 20C20.625 19.625 20.625 19.4489 20.625 19.25V8.75C20.625 8.55109 20.625 8 20.625 8C20.625 8 20.0739 8 19.875 8H4.875C4.058 8 3.37685 6.87434 3.37685 5.92566ZM3.37685 5.92566C3.37685 4.97698 4.058 4 4.875 4H17.625'
        stroke={colors}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16.5 15.125C17.1213 15.125 17.625 14.6213 17.625 14C17.625 13.3787 17.1213 12.875 16.5 12.875C15.8787 12.875 15.375 13.3787 15.375 14C15.375 14.6213 15.8787 15.125 16.5 15.125Z'
        fill={colors}
      />
    </svg>
  );
};

export default Wallet;
