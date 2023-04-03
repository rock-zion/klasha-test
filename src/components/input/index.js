import classNames from 'classnames';
import React from 'react';
import style from './style.module.scss';

export const btnStates = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  FLAT: 'flat',
  BLACK: 'black',
  ROUND: 'round',
};

const Buttons = props => {
  const { handleClick, label, Icon, classAddon, state } = props;
  return (
    <button
      onClick={handleClick}
      className={classNames(style.btn, 'btn_text', {
        [style.btn_secondary]: state === btnStates.SECONDARY,
        [style.btn_flat]: state === btnStates.FLAT,
        [style.btn_black]: state === btnStates.BLACK,
        [style.btn_no_icon]: !Icon,
        [classAddon]: true,
      })}>
      {Icon && <Icon />}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Buttons;
