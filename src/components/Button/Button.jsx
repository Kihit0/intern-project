import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = (props) => {
  const { children, className, onClick, isDisable } = props;

  return (
    <button className={cx(styles.btn, className)} onClick={onClick} disabled={isDisable}>
      {children}
    </button>
  );
};

export default Button;
