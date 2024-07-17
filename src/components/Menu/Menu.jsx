import React, { useState } from "react";
import styles from "./Menu.module.css";
import classNames from "classnames/bind";
import { Link, useHref } from "react-router-dom";

const cx = classNames.bind(styles);

const Menu = (props) => {
  const { items } = props;
  const href = useHref();

  return (
    <nav className={styles.nav}>
      {items.map((item, idx) => (
        <div className={styles.item} key={idx}>
          <Link
            className={cx(styles.link, { active: href.includes(item.url) })}
            to={item.url}
          >
            {item.name}
          </Link  >
        </div>
      ))}
    </nav>
  );
};

export default Menu;
