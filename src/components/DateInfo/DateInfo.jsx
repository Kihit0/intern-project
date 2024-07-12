import React from "react";
import moment from "moment";

moment.locale("ru");

const DateInfo = (props) => {
  const { children, date, isViewInfo, className } = props;

  const normalizeDate = (date) => {
    return moment(moment.unix(Number(date)).utc()).format("L");
  };

  return (
    <div>
      <span>{normalizeDate(date)}</span>
      {isViewInfo && <span className={className}>{children}</span>}
    </div>
  );
};

export default DateInfo;
