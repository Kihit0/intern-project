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
        <div className={styles.item} key={idx}>
          <a
            className={cx(styles.link, { active: activeLink === idx })}
            href="#"
            onClick={() => setActiveLink(idx)}
          >
            {item}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default Menu;
