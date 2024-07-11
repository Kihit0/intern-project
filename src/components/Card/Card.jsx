import React from "react";
import moment from "moment";
import shave from "shave";

import styles from "./card.module.css";
import classNames from "classnames/bind";

import Star from "../Icons/Star";
import SocialIcons from "../SocialIcons/SocialIcons";

moment.locale("ru");

const cx = classNames.bind(styles);

const IMAGE_DEFAULT = "src/components/Card/images/default-bcg.jpg";

const Card = (props) => {
  const { idx, image, type, date, title, text } = props;

  const isViewBackground = type === "news" && idx % 3 === 0;
  const isViewRow = type === "promotions";
  const isViewRowReverse = isViewRow && idx % 2 === 0;

  const urlImage = image ?? IMAGE_DEFAULT;

  const colorStrokeStar = isViewBackground
    ? "var(--color-white)"
    : "var(--color-cornflower-blue)";

  const dateConvert = moment.unix(Number(date)).utc();
  const dateNormalize = moment(dateConvert).format("L");

  React.useEffect(() => {
    shave(`.${styles.card__content_text}`, 70, { character: "..." });

    if (window.innerWidth < 768) {
      shave(`.${styles["card__content_text-view-background"]}`, 50, {
        character: "...",
      });
    }

  }, [window.innerWidth]);
  console.log(window.innerWidth)
  return (
    <div
      className={cx({
        card: true,
        "card-view-row": isViewRow,
      })}
    >
      <div
        className={cx({
          card__wrapper: true,
          "card__wrapper-view-row": isViewRow,
          "card__wrapper-view-row-reverse": isViewRowReverse,
        })}
      >
        <div
          className={cx({
            card__wrapper_img: true,
            "card__wrapper_img-view-background": isViewBackground,
            "card__wrapper_img-view-row": isViewRow,
            "card__wrapper_img-view-row-reverse": isViewRowReverse,
          })}
        >
          <div
            className={cx({
              card__shading: true,
              "card__shading-view-background": isViewBackground,
            })}
          ></div>
          <img
            className={cx({
              card__img: true,
              "card__img-view-background": isViewBackground,
            })}
            src={urlImage}
            alt="фото карточки"
          />
          <div
            className={cx({
              card__favorite: true,
              "card__favorite-view-background": isViewBackground,
              "card__favorite-view-row": isViewRow,
              "card__favorite-view-row-reverse": isViewRowReverse,
            })}
          >
            <div className={styles.card__favorite_img}>
              <Star stroke={colorStrokeStar} />
            </div>
          </div>
        </div>
        <div
          className={cx({
            card__content: true,
            "card__content-view-background": isViewBackground,
            "card__content-view-row": isViewRow,
          })}
        >
          <div className={styles.card__content_wrapper}>
            <div
              className={cx({
                card__content_wrapper_title: true,
                "card__content_wrapper_title-view-background": isViewBackground,
              })}
            >
              <h3 className={styles.card__content_title}>{title}</h3>
            </div>
            <div
              className={cx({
                card__content_wrapper_text: true,
                "card__content_wrapper_text-view-background": isViewBackground,
                "card__content_wrapper_text-view-row": isViewRow,
              })}
            >
              <p
                className={cx({
                  card__content_text: true,
                  "card__content_text-view-background": isViewBackground,
                })}
              >
                {text}
              </p>
            </div>
          </div>
          <div
            className={cx({
              card__footer: true,
              "card__footer-view-background": isViewBackground,
            })}
          >
            <div className={styles.card__footer_date}>
              <span>{dateNormalize}</span>
              {isViewRow && (
                <span
                  className={cx({
                    card__footer_date_text: true,
                    "card__footer_date_text-view-row": isViewRow,
                  })}
                >
                  Предложение активно
                </span>
              )}
            </div>
            <div className={styles.card__footer_icons}>
              <SocialIcons
                isViewDefault={isViewBackground}
                isViewWithout={isViewRow}
                without={`comment`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
