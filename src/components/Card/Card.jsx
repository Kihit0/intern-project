import React from "react";
import styles from "./card.module.css";
import classNames from "classnames/bind";
import Like from "../Icons/Like";
import Comment from "../Icons/Comment";
import View from "../Icons/View";
import Star from "../Icons/Star"

const cx = classNames.bind(styles);

const IMAGE_DEFAULT = "src/components/ux/Card/images/default-bcg.jpg";

const Card = (props) => {
  const { idx, image, isActiveNews } = props;

  const isViewBackground = isActiveNews && idx % 3 == 0;

  const urlImage = image ?? IMAGE_DEFAULT;

  const colorIcons = isViewBackground
    ? "var(--color-white)"
    : "var(--color-regent-gray)";
  const fillLike = isViewBackground ? "var(--color-white)" : "none";
  const colorStrokeStar = isViewBackground
    ? "var(--color-white)"
    : "var(--color-cornflower-blue)";

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
    <div className={styles.card}>
      <div className={styles.card__wrapper}>
        <div
          className={cx({
            card__wrappper_img: true,
            "card__wrapper_img-view-background": isViewBackground,
          })}
        >
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
          })}
        >
          <div className={styles.card__content_wrapper_title}>
            <h3 className={styles.card__content_title}>
              Результаты за 3-й квартал и 9 месяцев 2019 года
            </h3>
          </div>
          <div className={styles.card__content_wrapper_text}>
            <p
              className={cx({
                card__content_text: true,
                "card__content_text-view-background": isViewBackground,
              })}
            >
              В своём стремлении повысить качество жизни, они забывают,
              что синтетическое тестирование предопределяет высокую во…
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
            <span>04.02.2022</span>
          </div>
          <div className={styles.card__footer_icons}>
            {icons.map((item, index) => {
              return (
                <div
                  className={cx({
                    card__footer_icons_item: true,
                    "card__footer_icons_item-promotions": !isActiveNews,
                  })}
                  key={index}
                >
                  {item.icon}
                  <span className={styles.card__footer_icons_item_count}>
                    {item.count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
