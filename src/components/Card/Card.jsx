import React, { useEffect, useRef, useState } from "react";
import shave from "shave";

import styles from "./Card.module.css";
import classNames from "classnames/bind";

import LikeIcon from "../Icons/LikeIcon";
import CommentIcon from "../Icons/CommentIcon";
import ViewIcon from "../Icons/ViewIcon";
import Stats from "../Stats/Stats";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import DateInfo from "../DateInfo/DateInfo";

const cx = classNames.bind(styles);

const IMAGE_DEFAULT = "src/assets/images/default-card-header.jpg";

const Card = (props) => {
  const [availableHeight, setAvailableHeight] = useState(window.innerWidth);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const footerRef = useRef(null);

  const { image, date, title, text, view, stats } = props;

  const { isViewBackground, isViewRow, isViewRowReverse } = view;

  const colorIcons = isViewBackground ? "var(--color-white)" : null;

  const getModifyStats = () => {
    const icons = {
      likes: <LikeIcon fill={colorIcons} stroke={colorIcons} />,
      comments: <CommentIcon stroke={colorIcons} />,
      views: <ViewIcon color={colorIcons} />,
    };

    return Object.keys(stats).map((item) =>
      Object.assign({ count: stats[item] }, { icon: icons[item] })
    );
  };

  useEffect(() => {
    const updateHeight = () => {
      if (titleRef.current && footerRef.current && containerRef.current) {
        const th = titleRef.current.clientHeight;
        const fh = footerRef.current.clientHeight;
        const ch = containerRef.current.clientHeight;
        console.log(containerRef.current.clientHeight, th, fh);

        shave(styles.content__text, ch - 40 - th - fh - 20, {character: "..."});
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

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
            alt={title}
          />
          <FavoriteButton
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
          ref={containerRef}
        >
          <div className={styles.content__wrapper}>
            <div
              className={cx(styles.content__wrapper__title, {
                "content__wrapper_title-background": isViewBackground,
              })}
              ref={titleRef}
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
            ref={footerRef}
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
              <Stats stats={getModifyStats()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
