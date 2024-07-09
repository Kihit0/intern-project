import React from "react";
import styles from "./title.module.css";

const Title = (props) => {
  const { children, title } = props;
  return (
    <div className={styles.title__wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {children && (
        <div className={styles.title__subtitle_wrapper}>
          <p className={styles.title__subtitle}>{children}</p>
        </div>
      )}
    </div>
  );
};

export default Title;
