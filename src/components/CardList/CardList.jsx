import React, { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import classNames from "classnames/bind";

import Card from "../Card/Card";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { getManyItems } from "../../api/endpoint";

const cx = classNames.bind(styles);

const CardList = (props) => {
  const { view, stepPagination, endpoint } = props;

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowButton, setIsShowButton] = useState(true);

  const handleClickLoadingData = () => {
    setIsLoading(true);
  };

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

  const onClickToggleFavorite = (id) => {
    setData((value) =>
      value.map((item) => {
        if (item.id === id) {
          item.isFavorite = !item.isFavorite;
        }

        return item;
      })
    );
  };

  const setItemsData = () => {
    if (isLoading) {
      getManyItems(endpoint).then((item) => {
        if (endpoint === "news") {
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

        setIsLoading(false);
        setIsShowButton(item.total > data.length + stepPagination);
        setPagination((value) => value + stepPagination);
      });
    }
  };

  useEffect(() => {
    setItemsData();
  }, [isLoading]);

  return (
    <div>
      {" "}
      <div className={cx(styles.list, { row: getViews().isViewRow })}>
        {data.map((item, index) => {
          return (
            <div className={styles.item} key={item.id}>
              <Card
                idx={item.id}
                view={getViews(index + 1)}
                data={item}
                url={`/${endpoint}/${item.id}`}
                onAddFavorite={onClickToggleFavorite}
              />
            </div>
          );
        })}
        {isLoading && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}
      </div>
      {isShowButton && (
        <div className={styles.list__wrapper_btn}>
          <div className={styles.list__btn}>
            <Button onClick={handleClickLoadingData} isDisabled={isLoading}>
              Смотреть еще
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;
