import React from "react";
import styles from "./links.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const types = [
  ["news", "Новости"],
  ["promotions", "Акции"],
];

const Links = (props) => {
  const { onClick, activeType } = props;

  return (
    <>
      {types.map((type, idx) => {
        return (
          <span
            className={cx({
              links__item: true,
              "links__item-active": activeType === type[0],
            })}
            onClick={() => onClick(type[0])}
            key={idx}
          >
            {type[1]}
          </span>
        );
      })}
    </>
  );
};

export default Links;
