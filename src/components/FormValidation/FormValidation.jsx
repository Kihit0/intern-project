import React from "react";
import styles from "./FormValidation.module.css";
import { Formik } from "formik";

import FormBlock from "../FormBlock/FormBlock";
import Input from "../../ui/Input/Input";
import Select from "../../ui/Select/Select";
import Button from "../Button/Button";
import Checkbox from "../../ui/Checkbox/Checkbox";
import Radiobutton from "../../ui/Radiobutton/Radiobutton";

const common = {
  name: "Иванов Иван Иванович",
  city: "",
  about: "",
};

const emails = {
  workingEmail: "",
  personalEmail: "",
};

const phones = {
  workingTel: "",
  workingStraightTel: "",
  mobileTel: "",
  fax: "",
  homeTel: "",
};

const ru = {
  name: "ФИО",
  city: "Город",
  about: "О себе",
  workingEmail: "Email раб.",
  personalEmail: "Email личн.",
  workingTel: "Раб. тел.",
  workingStraightTel: "Раб. прямой",
  mobileTel: "Мобильный",
  fax: "Факс",
  homeTel: "Домашний",
};

const selectData = [
  { value: "Выбрать", label: "Выбрать" },
  { value: "Выбранный элемент", label: "Выбранный элемент" },
  { value: "Не выбран", label: "Не выбран" },
  { value: "Hover", label: "Hover" },
];

const initialValues = { ...common, ...phones, ...emails };

const validate = (values) => {
  const errors = new Map();

  Object.keys(values).forEach((item) => {
    if (!values[item]) {
      errors.set(item, "Пустое поле");
    }

    if (values[item] && Object.keys(emails).indexOf(item) !== -1) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values[item])) {
        errors.set(item, "Некорректный email");
      }
    }

    if (values[item] && Object.keys(phones).indexOf(item) !== -1) {
      if (!/\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/.test(values[item])) {
        errors.set(item, "Некорректный номер");
      }
    }
  });

  return Object.fromEntries(errors);
};

const FormValidation = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.content}>
              <FormBlock title="Общее">
                {Object.keys(common).map((item, idx) => (
                  <>
                    <div className={styles.item} key={idx}>
                      <Input
                        value={values[item]}
                        onChange={handleChange}
                        label={ru[item]}
                        id={item}
                        error={touched[item] && errors[item]}
                      />
                    </div>
                    {idx === 0 && (
                      <>
                        <div className={styles.item} key={idx}>
                          <Select
                            label="Специализация"
                            id="spec"
                            selectData={selectData}
                          />
                        </div>
                        <div className={styles.item} key={idx}>
                          <Select
                            label="Документ"
                            id="doc"
                            selectData={selectData}
                          />
                        </div>
                      </>
                    )}
                  </>
                ))}
              </FormBlock>
              <FormBlock title="Контакты">
                {Object.keys(phones).map((item, idx) => (
                  <div className={styles.item} key={idx}>
                    <Input
                      id={item}
                      value={values[item]}
                      onChange={handleChange}
                      label={ru[item]}
                      mask="+7 999 999 99 99"
                      placeholder="+7 999 999 99 99"
                      error={touched[item] && errors[item]}
                    />
                  </div>
                ))}
                {Object.keys(emails).map((item, idx) => (
                  <div className={styles.item} key={idx}>
                    <Input
                      id={item}
                      value={values[item]}
                      onChange={handleChange}
                      label={ru[item]}
                      type="email"
                      placeholder="example@gmail.com"
                      error={touched[item] && errors[item]}
                    />
                  </div>
                ))}
              </FormBlock>
              <FormBlock title="Мое мнение о чекбоксах">
                {[
                  "Неактивен, выбран",
                  "Неактивен, не выбран",
                  "Я люблю чекбоксы",
                  "Я ненавижу чекбоксы",
                ].map((text, idx) => (
                  <div className={styles.item} key={idx}>
                    <Checkbox
                      isActive={idx % 2 === 0}
                      isDisabled={idx < 2}
                      text={text}
                    />
                  </div>
                ))}
              </FormBlock>
              <FormBlock title="Мое мнение о радио-кнопках">
                {[
                  "Неактивна, выбрана",
                  "Неактивен, не выбран",
                  "Я люблю радио-кнопки",
                  "Я ненавижу радио-кнопки",
                ].map((text, idx) => (
                  <div className={styles.item} key={idx}>
                    <Radiobutton
                      isActive={idx % 2 === 0}
                      isDisabled={idx < 2}
                      text={text}
                    />
                  </div>
                ))}
                <div className={styles.item}>
                  <Input label="Комментарий" />
                </div>
              </FormBlock>
            </div>
            <div className={styles.buttons}>
              <div className={styles.buttons__item}>
                <Button
                  className={styles["btn-small"]}
                  type="submit"
                  isDisabled={isSubmitting}
                >
                  Сохранить
                </Button>
              </div>
              <div className={styles.buttons__item}>
                <Button className={styles["btn-transparent"]}>Отмена</Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormValidation;
