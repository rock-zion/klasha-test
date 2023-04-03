import React, { createContext, useState, useContext } from 'react';
import moment from 'moment/moment';

const DateContext = createContext();

const DateContextProvider = props => {
  const [currentWeek] = useState([
    moment().startOf('week').format('DD MMM'),
    moment().endOf('week').format('DD MMM YY'),
  ]);

  const [currentMonth] = useState([
    moment().startOf('month').format('DD MMM'),
    moment().endOf('month').format('DD MMM YY'),
  ]);

  const [lastMonth] = useState([
    moment().subtract(1, 'months').startOf('month').format('DD MMM'),
    moment().subtract(1, 'months').endOf('month').format('DD MMM YY'),
  ]);

  return (
    <DateContext.Provider value={{ currentWeek, currentMonth, lastMonth }}>
      {props.children}
    </DateContext.Provider>
  );
};

export const useDateProvider = () => {
  return useContext(DateContext);
};

export default DateContextProvider;
