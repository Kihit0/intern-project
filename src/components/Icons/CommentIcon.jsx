import React from "react";

const CommentIcon = (props) => {
  const { fill = "none", stroke = "var(--color-regent-gray)" } = props;

  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.09878 9.30462L2.11612 9.1165L2.00473 8.96392C1.39492 8.12859 1.07765 7.16983 1.07765 6.18421C1.07765 3.38275 3.68161 1 7.01583 1C10.35 1 12.954 3.38275 12.954 6.18421C12.954 8.98567 10.35 11.3684 7.01583 11.3684C6.16249 11.3684 5.34173 11.2136 4.57238 10.9092L4.35012 10.8212L4.14211 10.939C3.26175 11.4373 2.14816 11.7296 1.4424 11.878C1.55464 11.6691 1.65074 11.4381 1.73262 11.1923C1.91037 10.6587 2.03288 10.0197 2.09878 9.30462Z"
        stroke={stroke}
        fill={fill}
      />
    </svg>
  );
};

export default CommentIcon;
