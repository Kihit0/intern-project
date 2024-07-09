import React from "react";
import styles from "./button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = (props) => {
  const { children, modify } = props;

  const btnModify = modify ?? false;
  const btnUnique = "btn-" + modify;

  const classBtn = cx({
    btn: true,
    "btn-default": !btnModify,
    [btnUnique]: btnModify,
  });

  return <button className={classBtn}>{children}</button>;
};

export default Button;
