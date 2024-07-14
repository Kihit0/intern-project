import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardList.module.css";

import Card from "../Card/Card";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CardList = (props) => {
  const { data, view, tabActive } = props;

  const isViewRow = !Array.isArray(view) && view === "row";

  if (Array.isArray(data) && data.length === 0) {
    return;
  }

  const getViews = (id) => {
    return {
      isViewBackground: Array.isArray(view) && view.indexOf("background") !== -1 && id % 3 === 0,
      isViewRow: typeof view === "string" && view === "row",
      isViewRowReverse: view === "row" && id % 2 === 0
    }
  }

  return (
    <div className={cx(styles.list, { row: isViewRow })}>
      {data.map((item) => {
        return (
          <Link
            className={styles.item}
            to={`/${tabActive}/${item.id}`}
            key={item.id}
          >
            <Card
              idx={item.id}
              view={getViews(item.id)}
              date={item.pubDate}
              title={item.title}
              image={item.image ?? item.link}
              text={item.previewtext}
              stats={item.stats}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;
