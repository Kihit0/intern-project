import React, { useState } from "react";
import Checkbox from "../../ui/Checkbox/Checkbox";
import FormBlock from "../FormBlock/FormBlock";

const LayoutCheckbox = (props) => {
  const { className } = props;

  const [checkboxValues, setCheckboxValues] = useState([
    { text: "Неактивен, выбран", isActive: true, isDisabled: true },
    { text: "Неактивен, не выбран", isActive: false, isDisabled: true },
    { text: "Я люблю чекбоксы", isActive: true, isDisabled: false },
    { text: "Я ненавижу чекбоксы", isActive: false, isDisabled: false },
  ]);

  const onClickCheckbox = (index) => {
    console.log(index)
    setCheckboxValues((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <FormBlock title="Мое мнение о чекбоксах">
      {checkboxValues.map((item, idx) => (
        <div className={className} key={idx}>
          <Checkbox
            isActive={item.isActive}
            isDisabled={item.isDisabled}
            onClick={() => onClickCheckbox(idx)}
            text={item.text}
          />
        </div>
      ))}
    </FormBlock>
  );
};

export default LayoutCheckbox;
