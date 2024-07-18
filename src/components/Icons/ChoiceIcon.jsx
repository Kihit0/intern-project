import React from "react";

const ChoiceIcon = (props) => {
  const {
    width = "10",
    height = "7",
    color = "var(--color-regent-gray)",
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3.75L3.5 6.25L9 0.75"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChoiceIcon;
