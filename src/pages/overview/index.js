import ChartCard from 'components/chart_card';
import style from './style.module.scss';
import React, { useState } from 'react';
import { useDateProvider } from 'contexts/date';
import { Chart } from 'components/charts/mini_chart';
import PromoBanner from 'components/klasha/promo_banner';
import { SalesChart } from 'components/charts/sales_chart';
import ArrowDown from 'assets/icons/arrow_down';
import Buttons, { btnStates } from 'components/input';
import { useTranslation } from 'react-i18next';
import CustomSelect from 'components/custom_select';
import useDateRange from 'hooks/date_range';
import classNames from 'classnames';

const _dateRange = {
  WEEK: '7 days',
  MONTH: '30 days',
};

const Overview = () => {
  const { t } = useTranslation();
  const { currentWeek, currentMonth, lastMonth } = useDateProvider();
  const { last7Days, last30Days } = useDateRange();
  const [selectedCurrency, setSelectedCurrenry] = useState('usd');
  const [dateRange, setDateRange] = useState(_dateRange.WEEK);

  const currencyOptions = [
    { value: 'ngn', label: 'NGN' },
    { value: 'usd', label: 'USD' },
  ];

  const emailOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phoneNumber', label: 'Phone number' },
  ];

  const handleCurrencyChange = e => {
    setSelectedCurrenry(e.value);
  };

  return (
    <div className='app-container'>
      <h5 className='h_medium'>{t('titles.sales_overview')}</h5>
      <div className={style.overview_chart_grid}>
        <ChartCard title={t('dates.todays_sales')}>
          <Chart />
        </ChartCard>
        <ChartCard title={t('dates.this_week')} date={currentWeek}>
          <Chart />
        </ChartCard>
        <ChartCard title={t('dates.this_month')} date={currentMonth}>
          <Chart />
        </ChartCard>
        <ChartCard title={t('dates.last_month')} date={lastMonth}>
          <Chart />
        </ChartCard>
      </div>

      <div className={style.sales}>
        <div>
          <div className={style.sales_header}>
            <div className={style.sales_toggle}>
              <h5 className={classNames('h_medium', style.h_medium)}>
                {t('titles.sales')}
              </h5>
              <div className={style.toggle_wrapper}>
                <button
                  onClick={() => setDateRange(_dateRange.WEEK)}
                  className={classNames('date-range-btn', {
                    'active-date-range-btn': _dateRange.WEEK === dateRange,
                  })}>
                  7 days
                </button>
                <button
                  onClick={() => setDateRange(_dateRange.MONTH)}
                  className={classNames('date-range-btn', {
                    'active-date-range-btn': _dateRange.MONTH === dateRange,
                  })}>
                  30 days
                </button>
              </div>

              <CustomSelect
                handleChange={handleCurrencyChange}
                selectedOption={selectedCurrency}
                options={currencyOptions}
              />
            </div>

            <div className={style.r}>
              <CustomSelect options={emailOptions} selectedOption={'email'} />
              <Buttons
                state={btnStates.SECONDARY}
                Icon={ArrowDown}
                label={t('buttons.download_report')}
              />
            </div>
          </div>
          <div className={style.sales_chart_wrapper}>
            <SalesChart
              labels={dateRange === _dateRange.WEEK ? last7Days : last30Days}
            />
          </div>
        </div>
        <PromoBanner />
      </div>
    </div>
  );
};

export default Overview;
