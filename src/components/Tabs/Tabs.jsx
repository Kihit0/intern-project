import React from "react";
import styles from "./Tabs.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Links = (props) => {
  const { onClick, tabs } = props;

  return (
    <>
      {tabs.map((tab, idx) => {
        return (
          <span
            className={cx(styles.links__item, { "links__item-active": tab.active })}
            onClick={() => onClick(tab.name[0])}
            key={idx}
          >
            {tab.name[1]}
          </span>
        );
      })}
    </>
  );
};

export default Links;
