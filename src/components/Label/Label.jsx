import React from "react";
import styles from "./Label.module.css";

const Label = (props) => {
  const { children, label, id, error = false } = props;
  return (
    <div>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        {children}
      </div>

      {error && (
        <div className={styles.error__message}>
          <span className={styles.error}>{error}</span>
        </div>
      )}
    </div>
  );
};

export default Label;
