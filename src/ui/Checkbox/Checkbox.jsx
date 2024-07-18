import React from "react";
import styles from "./Checkbox.module.css";

import CheckedIcon from "../../components/Icons/CheckedIcon";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Checkbox = (props) => {
  const { isActive = false, onClick, isDisabled, text } = props;
  return (
    <div>
      <label
        className={cx(styles.container, { disabled: isDisabled })}
        onClick={onClick}
      >
        <input type="checkbox" />
        <span className={styles.custom}>
          {isActive && (
            <CheckedIcon color={isDisabled ? "var(--color-alto)" : undefined} />
          )}
        </span>
        <span className={styles.label}>{text}</span>
      </label>
    </div>
  );
};

export default Checkbox;
