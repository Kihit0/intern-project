import React, { useState } from "react";
import styles from "./FavoriteIcon.module.css";
import StarIcon from "../Icons/StarIcon";

const FavoriteIcon = (props) => {
  const [fill, setFill] = useState(null);

  const { color, className } = props;
  const stroke = color ?? "var(--color-cornflower-blue)";

  const onClickAddFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setFill((value) => (value === null ? stroke : null));
  };

  return (
    <div className={className} onClick={(e) => onClickAddFavorite(e)}>
      <div className={styles.icon}>
        <StarIcon stroke={stroke} fill={fill} />
      </div>
    </div>
  );
};

export default FavoriteIcon;
