import React from "react";
import styles from "./FormBlock.module.css";

const FormBlock = (props) => {
  const { children, title } = props;

  return (
    <div className={styles.form__block}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.ui__element}>{children}</div>
      </div>
    </div>
  );
};

export default FormBlock;
