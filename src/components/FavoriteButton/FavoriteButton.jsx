import React, { useState } from "react";
import styles from "./FavoriteButton.module.css";
import StarIcon from "../Icons/StarIcon";

const FavoriteButton = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { color, className } = props;
  const colorIcons = color ?? "var(--color-cornflower-blue)";

  const onClickAddFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={className} onClick={(e) => onClickAddFavorite(e)}>
      <div className={styles.icon}>
        <StarIcon stroke={colorIcons} fill={isFavorite ? colorIcons : "none"} />
      </div>
    </div>
  );
};

export default FavoriteButton;
