import React from "react";
import styles from "./LayoutMenu.module.css";

import Menu from "../Menu/Menu";

const LayoutMenu = (props) => {
  const { items } = props;

  return (
    <div className={styles.wrapper__menu}>
      <div className={styles.menu}>
        <Menu items={items} />
      </div>
    </div>
  );
};

export default LayoutMenu;
