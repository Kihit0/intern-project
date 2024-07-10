import React from "react";
import styles from "./button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = (props) => {
  const { children, modify, onClick, disable } = props;

  const btnModify = modify ?? false;
  const btnUnique = "btn-" + modify;

  return (
    <button
      className={cx({
        btn: true,
        "btn-default": !btnModify,
        [btnUnique]: btnModify,
      })}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
