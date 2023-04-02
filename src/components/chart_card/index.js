import React from 'react';
import style from './style.module.scss';

const ChartCard = props => {
  const { date = [], title = 'This week', amount = 1652.5, children } = props;

  return (
    <div className={style.wrapper}>
      {date.length ? (
        <div className={style.body}>
          <span>
            {date[0]} - {date[1]}
          </span>

          <div style={{ width: '100%', height: '69px' }}>{children}</div>
        </div>
      ) : null}
      <div className={style.footer}>
        <span className={style.title}>{title}</span>
        <span className={style.amount}>{`₦ ${amount.toLocaleString()}`}</span>
      </div>
    </div>
  );
};

export default ChartCard;
