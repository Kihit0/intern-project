import React from "react";
import styles from "./TitleBlock.module.css";

const TitleBlock = (props) => {
  const { children, title, classNameTitle } = props;
  return (
    <div className={styles.title__wrapper}>
      <h1 className={`${styles.title} ${classNameTitle}`}>{title}</h1>
      {children && (
        <div className={styles.subtitle__wrapper}>
          <p className={styles.subtitle}>{children}</p>
        </div>
      )}
    </div>
  );
};

export default TitleBlock;
