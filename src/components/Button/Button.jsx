import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = (props) => {
  const { children, className, onClick, disable } = props;

  return (
    <button className={cx(styles.btn, className)} onClick={onClick} disabled={disable}>
      {children}
    </button>
  );
};

export default Button;
