import React from 'react';
import moment from 'moment/moment';

const useDateRange = () => {
  const [last7Days] = React.useState(lastNDays(7));
  const [last30Days] = React.useState(lastNDays(30));

  function lastNDays(N) {
    var result = [];
    for (var i = 0; i < N; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(moment(d).format('DD MMM'));
    }

    return result.reverse();
  }

  return {
    last7Days,
    last30Days,
  };
};

export default useDateRange;
