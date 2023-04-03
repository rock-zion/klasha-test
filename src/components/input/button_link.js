import React from 'react';
import { btnStates } from '.';
import classNames from 'classnames';
import style from './style.module.scss';

const ButtonLink = props => {
  const { href, state, label, classAddon, Icon } = props;
  return (
    <a
      className={classNames(style.btn, 'btn_text', {
        [classAddon]: true,
        [style.btn_secondary]: state === btnStates.SECONDARY,
        [style.btn_flat]: state === btnStates.FLAT,
        [style.btn_black]: state === btnStates.BLACK,
        [classAddon]: true,
      })}
      href={href}>
      {Icon && <Icon />}
      <span>{label}</span>
    </a>
  );
};

export default ButtonLink;
