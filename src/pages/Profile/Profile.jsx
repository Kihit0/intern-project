import React from "react";
import styles from "./Profile.module.css";

import ModalBurger from "../../components/ModalBurger/ModalBurger";
import LayoutMenu from "../../components/LayoutMenu/LayoutMenu";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import FormValidation from "../../components/FormValidation/FormValidation";
import { NAV_ITEMS } from "../../constans/constants.data";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.wrapper}>
        <LayoutMenu items={NAV_ITEMS} />
        <div className={styles.content}>
          <div className={styles.title}>
            <TitleBlock
              title="Редактировать профиль"
              classNameTitle={styles.custom__title}
            />
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
