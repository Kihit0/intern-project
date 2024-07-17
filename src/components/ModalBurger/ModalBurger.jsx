import React, { useEffect, useState } from "react";
import styles from "./ModalBurger.module.css";

import CloseIcon from "../Icons/CloseIcon";
import Menu from "../Menu/Menu";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ModalBurger = (props) => {
  const { menuItems } = props;

  const [shouldShowModalBurger, setShouldShowModalBurger] = useState(false);

  const closeModalBurger = () => {
    const body = document.querySelector("body");
    body.classList.remove("hidden");

    setShouldShowModalBurger(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModalBurger();
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const header = document.getElementById("header");
    const burger = document.getElementById("burger");

    const updateHeight = () => {
      if (window.innerWidth >= 1240) {
        header.classList.remove("header__with_burger");
        closeModalBurger();
      } else {
        header.classList.add("header__with_burger");
      }
    };

    const openModal = () => {
      body.classList.add("hidden");
      setShouldShowModalBurger(true);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    burger.addEventListener("click", openModal);

    return () => {
      header.classList.remove("header__with_burger");
      body.classList.remove("hidden");
      window.removeEventListener("resize", updateHeight);
      burger.removeEventListener("click", openModal);
    };
  }, []);

  return (
    <div className={cx({ hide: !shouldShowModalBurger })}>
      <div className={styles.burger} onClick={handleBackgroundClick}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.title}>
                <h3>Меню раздела</h3>
              </div>
              <button
                className={styles.close}
                type="button"
                onClick={closeModalBurger}
              >
                <CloseIcon />
              </button>
            </div>
            <div className={styles.menu}>
              <Menu items={menuItems} />
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
    </div>
  );
};

export default ModalBurger;
