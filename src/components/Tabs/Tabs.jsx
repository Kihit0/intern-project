import React, { useState } from "react";
import styles from "./Tabs.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Tabs = (props) => {
  const { onClick, tabs } = props;

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClickActiveTab = (tab) => {
    onClick && onClick(tab);
    setActiveTab(tab);
  };

  return (
    <>
      {tabs.map((tab, idx) => {
        Object.assign(tab, {
          active: tab.name.indexOf(activeTab.name) !== -1,
        });
        const { active, name } = tab;

        return (
          <span
            className={cx(styles.links__item, { "links__item-active": active })}
            onClick={() => handleClickActiveTab(tab)}
            key={idx}
          >
            {name}
          </span>
        );
      })}
    </>
  );
};

export default Tabs;
