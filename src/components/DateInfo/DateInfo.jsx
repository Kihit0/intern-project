import React from "react";
import moment from "moment";

moment.locale("ru");

const normalizeDate = (date) => {
  return moment(moment.unix(Number(date)).utc()).format("L");
};

const DateInfo = (props) => {
  const { children, date, isViewInfo, className } = props;

  return (
    <div>
      <span>{normalizeDate(date)}</span>
      {isViewInfo && <span className={className}>{children}</span>}
    </div>
  );
};

export default DateInfo;
