import React, { useEffect, useState } from "react";
import shave from "shave";

import styles from "./Card.module.css";
import classNames from "classnames/bind";

import LikeIcon from "../Icons/LikeIcon";
import CommentIcon from "../Icons/CommentIcon";
import ViewIcon from "../Icons/ViewIcon";
import Stats from "../Stats/Stats";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
import DateInfo from "../DateInfo/DateInfo";

const cx = classNames.bind(styles);

const IMAGE_DEFAULT = "src/assets/images/default-card-header.jpg";

const Card = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const { idx, image, date, title, text, view } = props;

  const isViewBackground =
    Array.isArray(view) && view.indexOf("background") !== -1 && idx % 3 === 0;
  const isViewRow = typeof view === "string" && view === "row";
  const isViewRowReverse = isViewRow && idx % 2 === 0;

  const colorIcons = isViewBackground ? "var(--color-white)" : null;

  const getIcons = () => {
    const iconItem = [
      {
        icon: <LikeIcon fill={colorIcons} stroke={colorIcons} />,
        count: 123,
      },
      {
        icon: <CommentIcon stroke={colorIcons} />,
        count: 76,
      },
      {
        icon: <ViewIcon color={colorIcons} />,
        count: 225,
      },
    ];

    if (isViewRow) {
      return iconItem.filter((item) => item.icon.type.name !== "CommentIcon");
    }

    return iconItem;
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    shave(`.${styles.content__text}`, 70, { character: "..." });

    if (window.innerWidth < 768) {
      shave(`.${styles["content__text-background"]}`, 50, {
        character: "...",
      });
    }
  }, [width]);

  return (
    <div className={cx(styles.card, { "card-row": isViewRow })}>
      <div
        className={cx(styles.wrapper, {
          "wrapper-row": isViewRow,
          "wrapper-row-reverse": isViewRowReverse,
        })}
      >
        <div
          className={cx(styles.wrapper__img, {
            "wrapper__img-background": isViewBackground,
            "wrapper__img-row": isViewRow,
            "wrapper__img-row-reverse": isViewRowReverse,
          })}
        >
          {isViewBackground && <div className={styles.shading}></div>}
          <img
            className={cx(styles.img, {
              "img-background": isViewBackground,
            })}
            src={image ?? IMAGE_DEFAULT}
            alt="Заголовок карточки"
          />
          <FavoriteIcon
            className={cx(styles.favorite, {
              "favorite-background": isViewBackground,
              "favorite-row": isViewRow,
              "favorite-row-reverse": isViewRowReverse,
            })}
            color={isViewBackground ? "var(--color-white)" : null}
          />
        </div>
        <div
          className={cx(styles.content, {
            "content-background": isViewBackground,
            "content-row": isViewRow,
          })}
        >
          <div className={styles.content__wrapper}>
            <div
              className={cx(styles.content__wrapper__title, {
                "content__wrapper_title-background": isViewBackground,
              })}
            >
              <h3 className={styles.content__title}>{title}</h3>
            </div>
            <div
              className={cx(styles.content__wrapper_text, {
                "content__wrapper_text-background": isViewBackground,
                "content__wrapper_text-row": isViewRow,
              })}
            >
              <p
                className={cx(styles.content__text, {
                  "content__text-background": isViewBackground,
                })}
              >
                {text}
              </p>
            </div>
          </div>
          <div
            className={cx(styles.footer, {
              "footer-background": isViewBackground,
            })}
          >
            <div className={styles.footer__date}>
              <DateInfo
                date={date}
                isViewInfo={isViewRow}
                className={cx(styles.footer__date_text, {
                  "footer__date_text-row": isViewRow,
                })}
              >
                Предложение активно
              </DateInfo>
            </div>
            <div className={styles.footer__icons}>
              <Stats icons={getIcons()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
