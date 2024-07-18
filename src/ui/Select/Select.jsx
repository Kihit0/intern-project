import React from "react";
import ReactSelect, { components } from "react-select";
import styles from "./Select.module.css";

import ChoiceIcon from "../../components/Icons/ChoiceIcon";
import Label from "../../components/Label/Label";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "var(--color-white)" : "white",
    borderColor: state.isFocused ? "transparent" : "transparent",
    boxShadow: state.isFocused ? "transparent" : "transparent",
    minHeight: "19px",
    justifyContent: "flex-start",
    "&:hover": { borderColor: state.isFocused ? "transparent" : "transparent" },
  }),
  valueContainer: (provided) => ({ ...provided, padding: "0", flex: "none" }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:
      state.isFocused || state.isSelected
        ? "var(--color-wild-sand)"
        : "white",
    color: "var(--color-outer-space)",
    "&:hover": { backgroundColor: "var(--color-wild-sand)" },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  indicatorsContainer: () => ({ height: "20px", padding: "0 8px", marginTop: "-14px" }),
  menu: (provided) => ({ ...provided, zIndex: 9999 }),
};

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div className={styles.option_container}>
        {props.isSelected && (
          <span className={styles.checkmark}>
            <ChoiceIcon />
          </span>
        )}
        <span className={styles.option__label}>{props.data.label}</span>
      </div>
    </components.Option>
  );
};

const Select = (props) => {
  const { label, selectData } = props;

  return (
    <div>
      <Label label={label}>
        <div className={styles.select}>
          <ReactSelect
            styles={customStyles}
            defaultValue={selectData[1]}
            options={selectData}
            isSearchable={false}
            components={{ Option: CustomOption }}
          />
        </div>
      </Label>
    </div>
  );
};

export default Select;
