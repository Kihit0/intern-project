import React, { useEffect, useRef } from "react";
import styles from "./Textarea.module.css";

const Textarea = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    const handleInput = () => {
      textarea.style.height = "auto";
      if (textarea.scrollHeight < 100) {
        textarea.style.height = "100px";
      } else {
        textarea.style.height = Math.min(textarea.scrollHeight, 100) + "px";
      }
    };

    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.style.height = "auto";
      textarea.removeEventListener("input", handleInput);
    };
  }, []);

  return <textarea ref={textareaRef} className={styles.textarea} />;
};

export default Textarea;
