import React from "react";
import ReactSelect, { components } from "react-select";
import styles from "./Select.module.css";

import ChoiceIcon from "../../components/Icons/ChoiceIcon";
import Label from "../../components/Label/Label";
import ExpandIcon from "../../components/Icons/ExpandIcon";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "var(--color-white)" : "white",
    borderColor: state.isFocused ? "transparent" : "transparent",
    boxShadow: state.isFocused ? "transparent" : "transparent",
    minHeight: "19px",
    justifyContent: "flex-start",
    cursor: "pointer",
    "&:hover": { borderColor: state.isFocused ? "transparent" : "transparent" },
  }),
  valueContainer: (provided) => ({ ...provided, padding: "0", flex: "none" }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:
      state.isFocused || state.isSelected ? "var(--color-wild-sand)" : "white",
    color: "var(--color-outer-space)",
    cursor: "pointer",
    padding: "8px 0 10px",
    "&:hover": { backgroundColor: "var(--color-wild-sand)" },
    "&:last-child": { paddingBottom: "8px" },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  indicatorsContainer: () => ({
    height: "20px",
    padding: "0 8px",
    marginTop: "-8px",
  }),
  singleValue: (provided) => ({ ...provided, marginInline: 0 }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
    maxWidth: "325px",
    boxShadow: "none",
  }),
  menuList: (provided) => ({
    ...provided,
    paddingBlock: 0,
    width: "325px",
    left: "-24px",
    top: "-3px",
    border: "var(--border-solid-small) var(--color-athens-gray)",
    borderRadius: "var(--border-radius-small)",
    boxShadow: "var(--box-shadow) rgba(0,0,0, 3%)",
  }),
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

const CustomIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ExpandIcon />
    </components.DropdownIndicator>
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
            components={{
              Option: CustomOption,
              DropdownIndicator: CustomIndicator,
            }}
          />
        </div>
      </Label>
    </div>
  );
};

export default Select;
