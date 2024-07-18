import React, { useState, useEffect, useRef } from "react";
import styles from "./Textarea.module.css";

const Textarea = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    const handleInput = () => {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 100) + "px";
    };

    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, []);

  return <textarea ref={textareaRef} className={styles.textarea} />;
};

export default Textarea;
