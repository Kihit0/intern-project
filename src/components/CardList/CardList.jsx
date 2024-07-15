import React, { useEffect, useState } from "react";
import styles from "./CardList.module.css";

import Card from "../Card/Card";
import classNames from "classnames/bind";
import { getManyItems } from "../../api/endpoint";

const cx = classNames.bind(styles);

const CardList = (props) => {
  const { activeTab, isLoading, onIsLoading, onIsShowButton } = props;

  const { view, stepPagination, endpoint } = activeTab;

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(0);

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

  const handleClickToggleFavorite = (id) => {
    setData((value) =>
      value.map((item) => {
        if (item.id === id) {
          item.isFavorite = !item.isFavorite;
          return item;
        }

        return item;
      })
    );
  };

  const setItemsData = () => {
    if (isLoading) {
      getManyItems(endpoint).then((item) => {
        if (activeTab.endpoint === "news") {
          item.data.forEach((item) =>
            Object.assign(item, {
              stats: { likes: 125, comments: 55, views: 300 },
              isFavorite: false,
            })
          );
        } else {
          item.data.forEach((item) =>
            Object.assign(item, {
              stats: { likes: 125, views: 300 },
              isFavorite: false,
              endDate: "1312312",
            })
          );
        }

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
        setPagination((value) => value + stepPagination);
      });
    }
  };

  useEffect(() => {
    setItemsData();
  }, [activeTab, isLoading]);

  return (
    <div className={cx(styles.list, { row: getViews().isViewRow })}>
      {data.map((item, index) => {
        return (
          <div className={styles.item} key={item.id}>
            <Card
              idx={index}
              view={getViews(item.id)}
              data={item}
              url={`/${endpoint}/${item.id}`}
              onAddFavorite={handleClickToggleFavorite}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
