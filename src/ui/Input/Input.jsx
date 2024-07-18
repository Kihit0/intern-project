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
    type = "text",
    isDisabled,
  } = props;

  return (
    <div className={styles.block}>
      <Label id={id} label={label} error={error} isDisabled={isDisabled}>
        <ReactInputMask
          className={cx(styles.input, { error: error })}
          id={id}
          type={type}
          mask={mask}
          maskPlaceholder=" "
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
        />
      </Label>
    </div>
  );
};

export default Input;
