import React, { Children, cloneElement, isValidElement, useState } from "react";
import styles from "./Tabs.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Tabs = (props) => {
  const { children, tabs, onClick } = props;

  const [activeTab, setActiveTab] = useState(0);

  const handleClickTabActive = (idx) => {
    onClick();
    setActiveTab(idx);
  };

  return (
    <>
      <div className={styles.links}>
        {tabs.map((tab, idx) => {
          const { name } = tab;

          return (
            <span
              className={cx(styles.links__item, {
                "links__item-active": idx === activeTab,
              })}
              onClick={() => handleClickTabActive(idx)}
              key={idx}
            >
              {name}
            </span>
          );
        })}
      </div>
      <div>{children[activeTab]}</div>
    </>
  );
};

export default Tabs;
