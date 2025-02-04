import React from "react";

const LikeIcon = (props) => {
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
        d="M6.58815 11.0694L6.57725 11.0587L6.56571 11.0487C4.88325 9.58862 3.53244 8.40013 2.5974 7.28413C1.66778 6.17459 1.20117 5.19637 1.20117 4.16314C1.20117 2.49039 2.51339 1.18945 4.24217 1.18945C5.19076 1.18945 6.1472 1.63104 6.76073 2.34234L7.13935 2.78129L7.51796 2.34234C8.1315 1.63104 9.08794 1.18945 10.0365 1.18945C11.7653 1.18945 13.0775 2.49039 13.0775 4.16314C13.0775 5.19637 12.6109 6.17459 11.6813 7.28413C10.7463 8.40013 9.39545 9.58862 7.71298 11.0487L7.70145 11.0587L7.69055 11.0694L7.13935 11.6101L6.58815 11.0694Z"
        stroke={stroke}
        fill={fill}
      />
    </svg>
  );
};

export default LikeIcon;
