import Buttons, { btnStates } from 'components/input';
import React from 'react';
import style from './style.module.scss';
import { useTranslation } from 'react-i18next';

const PromoBanner = () => {
  const { t } = useTranslation();
  return (
    <div className={style.wrapper}>
      <p>{t('marketing.klasha_wire')}</p>

      <div className={style.btn_wrapper}>
        <Buttons state={btnStates.BLACK} label={t('buttons.send_a_wire')} />
      </div>
    </div>
  );
};

export default PromoBanner;
