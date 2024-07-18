import React, { useState } from "react";
import Radio from "../../ui/Radio/Radio";

const LayoutRadio = (props) => {
  const { className } = props;

  const [checkboxValues, setCheckboxValues] = useState([
    { text: "Неактивна, выбрана", isActive: true, isDisabled: true },
    { text: "Неактивна, не выбрана", isActive: false, isDisabled: true },
    { text: "Я люблю радио-кнопки", isActive: true, isDisabled: false },
    { text: "Я ненавижу радио-кнопки", isActive: false, isDisabled: false },
  ]);

  const onClickCheckbox = (index) => {
    setCheckboxValues((prev) => {
      return prev.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }
        return item;
      });
    });
  };

  return (
    <>
      {checkboxValues.map((item, idx) => (
        <div className={className} key={idx}>
          <Radio
            isActive={item.isActive}
            isDisabled={item.isDisabled}
            onClick={() => onClickCheckbox(idx)}
            text={item.text}
          />
        </div>
      ))}
    </>
  );
};

export default LayoutRadio;
