import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import classNames from 'classnames';

const NavLink = props => {
  const { url, title, Icon, isActive } = props;
  return (
    <Link
      className={classNames(style.nav_wrapper, {
        [style.nav_wrapper_active]: isActive,
      })}
      to={url}>
      <Icon colors={isActive ? 'var(--primary)' : 'var(--black)'} />
      <span
        className={classNames(style.link_title, 'body_text', {
          [style.link_title_active]: isActive,
        })}>
        {title}
      </span>
    </Link>
  );
};

export default NavLink;
