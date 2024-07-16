import React, { useState } from "react";
import styles from "./Menu.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Menu = (props) => {
  const { items } = props;

  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav className={styles.nav}>
      {items.map((item, idx) => (
        <div
          className={styles.item}
          key={idx}
          onClick={() => setActiveLink(idx)}
        >
          <p className={cx({ active: activeLink === idx })}>{item}</p>
        </div>
      ))}
    </nav>
  );
};

export default Menu;
