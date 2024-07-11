import React from "react";
import { Link } from "react-router-dom";
import styles from "./cardList.module.css";

import Card from "../Card/Card";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CardList = (props) => {
  const { data, activeType } = props;

  if (data.length === 0) {
    return;
  }

  return (
    <div
      className={cx({
        list: true,
        "list-full": activeType === "promotions",
      })}
    >
      {Array.isArray(data) &&
        data.map((item) => {
          return (
            <Link
              className={cx({
                list__item: true,
                "list__item-full": activeType === "promotions",
              })}
              to={`/${activeType}/${item.id}`}
              key={item.id}
            >
              <Card
                idx={item.id}
                type={activeType}
                date={item.pubDate}
                title={item.title}
                image={item.image ?? item.link}
                text={item.previewtext}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default CardList;
