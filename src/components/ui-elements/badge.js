import classNames from 'classnames';
import React from 'react';
import style from './badge.module.scss';
import { useTranslation } from 'react-i18next';

const Badge = props => {
  const { title } = props;
  const { t } = useTranslation();

  const getStatusLanguage = title => {
    switch (title) {
      case 'failed':
        return t('status.failed');
      case 'in progress':
        return t('status.in_progress');
      case 'success':
        return t('status.success');
      case 'cancelled':
        return t('status.cancelled');

      default:
        break;
    }
  };

  return (
    <div
      className={classNames(style.wrapper, {
        [style.failed]: title === 'failed',
        [style.success]: title === 'success',
        [style.in_progress]: title === 'in progress',
        [style.cancelled]: title === 'cancelled',
      })}>
      <span>{getStatusLanguage(title)}</span>
    </div>
  );
};

export default Badge;
