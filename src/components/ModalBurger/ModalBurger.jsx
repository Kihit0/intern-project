import React, { useEffect } from "react";
import styles from "./ModalBurger.module.css";

import CloseIcon from "../Icons/CloseIcon";
import Menu from "../Menu/Menu";

const ModalBurger = (props) => {
  const { linkItems, onClose, onOpen } = props;

  const body = document.querySelector("body");
  const header = document.getElementById("header");
  const burger = document.getElementById("burger");

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();

      body.classList.remove("hidden");
    }
  };

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 1240) {
        onClose();
        header.classList.remove("header__with_burger");
      } else {
        header.classList.add("header__with_burger");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    burger.addEventListener("click", () => {
      body.classList.add("hidden");
      onOpen();
    });

    return () => {
      header.classList.remove("header__with_burger");
      body.classList.remove("hidden");
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

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
          <a className={styles.wrapper__logo} href="/">
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
