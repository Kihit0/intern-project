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
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const IMAGE_DEFAULT = "src/assets/images/default-card-header.jpg";

const Card = (props) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const footerRef = useRef(null);

  const { image, date, title, text, view, stats, url } = props;

  const { isViewBackground, isViewRow, isViewRowReverse } = view;

  const colorIcons = isViewBackground ? "var(--color-white)" : null;

  const getModifyStats = () => {
    const icons = {
      likes: colorIcons ? (
        <LikeIcon fill={colorIcons} stroke={colorIcons} />
      ) : (
        <LikeIcon />
      ),
      comments: colorIcons ? (
        <CommentIcon stroke={colorIcons} />
      ) : (
        <CommentIcon />
      ),
      views: colorIcons ? <ViewIcon color={colorIcons} /> : <ViewIcon />,
    };

    return Object.keys(stats).map((item) =>
      Object.assign({ count: stats[item] }, { icon: icons[item] })
    );
  };

  useEffect(() => {
    const updateHeight = () => {
      if (titleRef.current && footerRef.current && containerRef.current) {
        const titleHeight = titleRef.current.clientHeight;
        const footerHeight = footerRef.current.clientHeight;
        const containerHeight = containerRef.current.clientHeight;

        const maxHeight = containerHeight - titleHeight - footerHeight;

        shave(`.${styles.content__text}`, maxHeight, { character: "..." });
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
          <Link to={url}>
            {isViewBackground && <div className={styles.shading}></div>}
            <img
              className={cx(styles.img, {
                "img-background": isViewBackground,
              })}
              src={image ?? IMAGE_DEFAULT}
              alt={title}
            />
          </Link>
          <FavoriteButton
            className={cx(styles.favorite, {
              "favorite-background": isViewBackground,
              "favorite-row": isViewRow,
              "favorite-row-reverse": isViewRowReverse,
            })}
            color={isViewBackground ? "var(--color-white)" : null}
          />
        </div>
        <Link
          to={url}
          className={cx(styles.content, {
            "content-background": isViewBackground,
            "content-row": isViewRow,
          })}
        >
          <div className={styles.content__wrapper} ref={containerRef}>
            <div
              className={cx(styles.content__wrapper_title, {
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
        </Link>
      </div>
    </div>
  );
};

export default Card;
