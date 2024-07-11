import React from "react";
import styles from "./socialIcons.module.css";
import classNames from "classnames/bind";

import Like from "../Icons/Like";
import Comment from "../Icons/Comment";
import View from "../Icons/View";

const cx = classNames.bind(styles);

const SocialIcons = (props) => {
  const { isViewDefault, isViewWithout, without } = props;

  const fillLike = isViewDefault ? "var(--color-white)" : "none";
  const colorIcons = isViewDefault
    ? "var(--color-white)"
    : "var(--color-regent-gray)";

  const classWithout = `icons__item-without-${without}`;

  const icons = [
    {
      icon: <Like fill={fillLike} stroke={colorIcons} />,
      count: 123,
    },
    {
      icon: <Comment stroke={colorIcons} />,
      count: 76,
    },
    {
      icon: <View stroke={colorIcons} fill={colorIcons} />,
      count: 225,
    },
  ];

  return (
    <div className={styles.icons}>
      {icons.map((item, index) => {
        return (
          <div
            className={cx({
              icons__item: true,
              [classWithout]: isViewWithout,
            })}
            key={index}
          >
            {item.icon}
            <span className={styles.icons__item_count}>{item.count}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SocialIcons;
