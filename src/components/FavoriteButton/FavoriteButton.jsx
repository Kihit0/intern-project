import React from "react";
import styles from "./FavoriteButton.module.css";
import StarIcon from "../Icons/StarIcon";

const FavoriteButton = (props) => {
  const { color, className, isFavorite, onClick} = props;
  const colorIcons = color ?? "var(--color-cornflower-blue)";

  return (
    <button className={className} onClick={onClick}>
      <div className={styles.icon}>
        <StarIcon stroke={colorIcons} fill={isFavorite ? colorIcons : "none"} />
      </div>
    </button>
  );
};

export default FavoriteButton;
