import React from "react";
import styles from "./Radiobutton.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Radiobutton = (props) => {
  const { isActive, onClick, isDisabled, text } = props;

  return (
    <div>
      <label
        className={cx(styles.container, {
          disabled: isDisabled,
          active: isActive,
        })}
        onClick={onClick}
      >
        <input type="radio" />
        <span className={styles.custom}></span>
        <span className={styles.label}>{text}</span>
      </label>
    </div>
  );
};

export default Radiobutton;
