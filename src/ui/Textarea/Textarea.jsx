import React, { useRef } from "react";
import styles from "./Textarea.module.css";
import Label from "../../components/Label/Label";

const Textarea = (props) => {
  const { id, label, error, onChange, value } = props;

  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "30px";
    textarea.style.height = `${Math.max(textarea.scrollHeight, 100)}px`;
    onChange(textarea.value);
  };

  return (
    <div>
      <Label id={id} label={label} error={error}>
        <textarea
          id={id}
          ref={textareaRef}
          value={value}
          onChange={onChange}
          className={styles.textarea}
          onInput={handleInput}
          placeholder="..."
        />
      </Label>
    </div>
  );
};

export default Textarea;
