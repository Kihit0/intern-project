import React from "react";
import moment from "moment";

moment.locale("ru");

const DateInfo = (props) => {
  const { children, date, isViewInfo, className, viewDate } = props;

  const normalizeDate = (date) => {
    const format = viewDate ? viewDate : "L";
    return moment(moment.unix(Number(date)).utc()).format(format);
  };

  return (
    <div>
      <span>{normalizeDate(date)}</span>
      {isViewInfo && <span className={className}>{children}</span>}
    </div>
  );
};

export default DateInfo;
