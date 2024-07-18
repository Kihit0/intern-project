import React from "react";
import styles from "./Radio.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Radio = (props) => {
  const { isActive, onClick, isDisabled, text } = props;

  return (
    <div>
      <label
        className={cx(styles.container, {
          disabled: isDisabled,
          active: isActive,
        })}
      >
        <input className={styles.radio} type="radio" />
        <span
          className={styles.custom}
          onClick={() => !isDisabled && onClick()}
        ></span>
        <span className={styles.label}>{text}</span>
      </label>
    </div>
  );
};

export default Radio;
