import classNames from 'classnames';
import BasicTable from 'components/tables/basic_table';
import Badge from 'components/ui-elements/badge';
import style from './style.module.scss';
import React, { useState } from 'react';
import { useSidebarProvider } from 'contexts/sidebar';
import CustomSelect from 'components/custom_select';
import CustomSearch from 'components/input/search';
import Buttons, { btnStates } from 'components/input';
import FilterIcon from 'assets/icons/filter';
import { useTranslation } from 'react-i18next';

const Transactions = props => {
  const { t } = useTranslation();
  const { table_colunm, table_data } = props;
  const { hideSidebar } = useSidebarProvider();
  const [selectedStatus, setSelectedStatus] = useState('');
  const [search, setSearch] = useState('');

  const handleStatusFilter = e => {
    setSelectedStatus(e.value);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const select_options = [
    { value: '', label: t('status.all_status') },
    { value: 'failed', label: t('status.failed') },
    {
      value: 'in progress',
      label: t('status.in_progress'),
    },
    { value: 'success', label: t('status.success') },
    {
      value: 'cancelled',
      label: t('status.cancelled'),
    },
  ];
  return (
    <div
      className={classNames(style.wrapper, {
        [style.expanded_wrapper]: hideSidebar,
      })}>
      <div>
        <div className={classNames(style.title_wrapper)}>
          <h5 className={classNames(style.pagetiitle)}>
            {t('titles.transaction_history')}
          </h5>
        </div>
        <div className={style.utils_wrapper}>
          <div className={style.search}>
            <CustomSearch handleChange={updateSearch} value={search} />
          </div>
          <div className={style.export_wrapper}>
            <CustomSelect
              options={select_options}
              selectedOption={selectedStatus}
              handleChange={handleStatusFilter}>
              <FilterIcon />
            </CustomSelect>
            <Buttons state={btnStates.SECONDARY} label='Export' />
          </div>
        </div>

        <div
          className={classNames(style.table_wrapper, {
            [style.expanded_table_wrapper]: hideSidebar,
          })}>
          <BasicTable hasPagination={true} colunm={table_colunm}>
            <tbody>
              {table_data
                // eslint-disable-next-line
                .filter(item => {
                  if (selectedStatus) return selectedStatus === item.status;
                  if (!selectedStatus) return selectedStatus !== item.status;
                })
                .map((item, index) => {
                  const {
                    trx_id,
                    source,
                    customer_name,
                    customer_email,
                    request_date,
                    status,
                    amount,
                  } = item;
                  return (
                    <tr key={index}>
                      <td>{trx_id}</td>
                      <td>{source}</td>
                      <td>{customer_name}</td>
                      <td>{customer_email}</td>
                      <td>
                        {amount.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'NGN',
                        })}
                      </td>
                      <td>{request_date}</td>
                      <td>
                        <Badge title={status} />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </BasicTable>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
Transactions.defaultProps = {
  table_colunm: [
    'table_titles.transaction_id',
    'table_titles.source',
    'table_titles.customer_name',
    'table_titles.customer_email',
    'table_titles.amount',
    'table_titles.request_date',
    'table_titles.status',
  ],

  table_data: [
    {
      trx_id: 'GB124QWERTY12346',
      source: 'GTB',
      method: 'Bank Transfer',
      customer_name: 'Mike Owen',
      customer_email: 'enspktnd@gamail.com',
      request_date: '07.18.2017',
      status: 'failed',
      amount: 232000.0,
    },
    {
      trx_id: 'J5N7AWQK58N3QYE',
      source: 'UBA',
      method: 'Bank Transfer',
      customer_name: "Steve O'Shassy",
      customer_email: 'enspktnd@gamail.com',
      request_date: '07.18.2017',
      status: 'in progress',
      amount: 210.0,
    },
    {
      trx_id: '5N7AZZPO9K8GVQY',
      source: 'GTB',
      method: 'Bank Transfer',
      customer_name: 'Mike Owen',
      customer_email: 'enspktnd@gamail.com',
      request_date: '07.18.2017',
      status: 'success',
      amount: 102.05,
    },
    {
      trx_id: '9RZVGJ4D2Q6WQ7Y',
      source: 'GTB',
      method: 'Bank Transfer',
      customer_name: 'Mike Owen',
      customer_email: 'enspktnd@gamail.com',
      request_date: '07.18.2017',
      status: 'cancelled',
      amount: 96.05,
    },
  ],
};
