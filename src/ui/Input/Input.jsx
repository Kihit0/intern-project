import React from "react";
import styles from "./Input.module.css";
import ReactInputMask from "react-input-mask";
import classNames from "classnames/bind";
import Label from "../../components/Label/Label";

const cx = classNames.bind(styles);

const Input = (props) => {
  const {
    label,
    mask,
    id,
    error,
    value,
    onChange,
    placeholder = "...",
    type="text"
  } = props;

  return (
    <div className={styles.block}>
      <Label id={id} label={label} error={error}>
        {mask ? (
          <ReactInputMask
            className={cx(styles.input, { error: error })}
            id={id}
            mask={mask}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        ) : (
          <input
            className={cx(styles.input, { error: error })}
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </Label>
    </div>
  );
};

export default Input;
