import React, { useRef } from "react";
import styles from "./Textarea.module.css";
import Label from "../../components/Label/Label";

const Textarea = (props) => {
  const { id, label, error, onChange, value } = props;

  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.minHeight = "30px";
    textarea.style.minHeight = `100px`;
  };

  const handleLeave = () => {
    const textarea = textareaRef.current;
    textarea.style.minHeight = "auto";
    textarea.style.minHeight = `${Math.min(textarea.scrollHeight, 100)}px`;
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
          onBlur={handleLeave}
        />
      </Label>
    </div>
  );
};

export default Textarea;
