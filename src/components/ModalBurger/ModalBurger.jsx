import React from "react";
import styles from "./ModalBurger.module.css";

import CloseIcon from "../Icons/CloseIcon";
import Menu from "../Menu/Menu";

const ModalBurger = (props) => {
  const { linkItems, onClose } = props;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.burger} onClick={handleBackgroundClick}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.title}>
              <h3>Меню раздела</h3>
            </div>
            <button className={styles.close} type="button" onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div className={styles.menu}>
            <Menu items={linkItems} />
          </div>
        </div>

        <div className={styles.footer}>
          <a className={styles.wrapper__logo} href="#">
            <img
              className={styles.logo}
              src="/src/assets/images/icons/logo-default.svg"
              alt="amoCRM"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalBurger;
