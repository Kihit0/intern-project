import React, { useEffect, useState } from "react";
import styles from "./CardList.module.css";

import Card from "../Card/Card";
import classNames from "classnames/bind";
import { getManyItems } from "../../api/endpoint";

const cx = classNames.bind(styles);

const CardList = (props) => {
  const { activeTab, pagination, isLoading, onIsLoading, onIsShowButton } =
    props;

  const { view, stepPagination, endpoint } = activeTab;
  const [data, setData] = useState([]);

  const getViews = (id) => {
    const isViewBackground =
      Array.isArray(view) &&
      view.indexOf("background") !== -1 &&
      id &&
      id % 3 === 0;

    return {
      isViewBackground,
      isViewRow: typeof view === "string" && view === "row",
      isViewRowReverse: view === "row" && id && id % 2 === 0,
    };
  };

  useEffect(() => {
    getManyItems(endpoint).then((item) => {
      item.data.forEach((item) =>
        Object.assign(item, { stats: { likes: 123, comments: 67, views: 85 } })
      );

      const paginationData = item.data.slice(
        pagination,
        pagination + stepPagination
      );

      setData((value) => {
        if (value.length > 1 && pagination === 0) {
          value = [];
        }

        return value.concat(paginationData);
      });

      onIsLoading(false);
      onIsShowButton(item.total > data.length + stepPagination);
    });
  }, [activeTab, pagination, isLoading]);

  return (
    <div className={cx(styles.list, { row: getViews().isViewRow })}>
      {data.map((item) => {
        return (
          <div
            className={styles.item}
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
              url={`/${endpoint}/${item.id}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
