import React from "react";
import styles from "./Profile.module.css";

import ModalBurger from "../components/ModalBurger/ModalBurger";
import Menu from "../components/Menu/Menu";
import TitleBlock from "../components/TitleBlock/TitleBlock";
import FormValidation from "../components/FormValidation/FormValidation";

const NAV_ITEMS = [
  {
    name: "Избранное",
    url: "/news/1",
  },
  {
    name: "Моя компания",
    url: "/profile",
  },
  {
    name: "Моё развитие",
    url: "#",
  },
  {
    name: "Новости компании",
    url: "#",
  },
  {
    name: "Телефонная книга",
    url: "#",
  },
];

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__menu}>
          <div className={styles.menu}>
            <Menu items={NAV_ITEMS} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <TitleBlock title="Редактировать профиль" classNameTitle={styles.custom__title} />
          </div>
          <div className={styles.form}>
            <FormValidation />
          </div>
        </div>
      </div>
      <ModalBurger menuItems={NAV_ITEMS} />
    </div>
  );
};

export default Profile;
