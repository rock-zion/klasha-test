import React from 'react';
import style from './basic-table-style.module.scss';
import { useTranslation } from 'react-i18next';

const BasicTable = props => {
  const { t } = useTranslation();
  const { colunm, children } = props;
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            {colunm.map((item, index) => (
              <td key={index}>{t(item)}</td>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};

export default BasicTable;
