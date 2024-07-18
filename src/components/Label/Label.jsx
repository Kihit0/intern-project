import React from "react";
import styles from "./Label.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Label = (props) => {
  const { children, label, id, error, isDisabled } = props;
  return (
    <div>
      <div className={styles.wrapper}>
        <label
          className={cx(styles.label, { disabled: isDisabled })}
          htmlFor={id}
        >
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
