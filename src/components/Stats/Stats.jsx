import React from "react";
import styles from "./Stats.module.css";

const Stats = (props) => {
  const { icons } = props;

  return (
    <div className={styles.icons}>
      {icons.map((item, index) => {
        return (
          <div className={styles.icons__item} key={index}>
            {item.icon}
            <span className={styles.icons__item_count}>{item.count}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
