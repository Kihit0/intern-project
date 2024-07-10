import React from "react";
import { Link } from "react-router-dom";

import styles from "./app.module.css";
import classNames from "classnames/bind";

import Title from "./components/Title/Title";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";

const cx = classNames.bind(styles);

const types = [
  {
    lang: ["news", "Новости"],
    stepPagination: 5,
  },
  {
    lang: ["promotions", "Акции"],
    stepPagination: 3,
  },
];

const App = () => {
  const [activeType, setActiveType] = React.useState("news");
  const [pagination, setPagination] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const getStepPagination = () => {
    return types.find((item) => item.lang.indexOf(activeType) !== -1)
      .stepPagination;
  };

  const getData = async () => {
    try {
      setIsLoading(true);

      const stepPagination = getStepPagination();
      const response = await fetch(`http://localhost/api/` + activeType);
      const result = await response.json();

      return result.slice(pagination, pagination + stepPagination);
    } catch (err) {
      console.log("Error: ", err);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickLink = (type) => {
    if (type !== activeType) {
      setActiveType(type);
      setPagination(0);
      setData([]);
    }
  };

  const handleClickButton = () => {
    if (isLoading) {
      return;
    }
    setPagination((value) => value + getStepPagination());
  };

  React.useEffect(() => {
    const data = getData();

    data.then((item) => setData((value) => value.concat(item)));
  }, [activeType, pagination]);

  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <div className={styles.app__title}>
          <Title
            title={
              <>
                Получите <span className={styles.accent}>максимум</span>{" "}
                от отдела продаж
              </>
            }
          >
            <>
              amoCRM — это полный набор инструментов, которые раскроют потенциал
              вашего отдела продаж и повысят его эффективность. Считается лучшей
              CRM-системой по версии{" "}
              <span className={`${styles.accent} ${styles.link}`}>
                crmrating.ru
              </span>
            </>
          </Title>
        </div>
        <div className={styles.app__links}>
          <div className={styles.app__links_wrapper}>
            {types.map((type, idx) => {
              return (
                <span
                  className={cx({
                    app__links_item: true,
                    "app__links_item-active": activeType === type.lang[0],
                  })}
                  onClick={() => handleClickLink(type.lang[0])}
                  key={idx}
                >
                  {type.lang[1]}
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles.app__content}>
          <div
            className={cx({
              app__content_items: true,
              "app__content_items-full": activeType === "promotions",
            })}
          >
            {data &&
              Array.isArray(data) &&
              data.map((item) => {
                return (
                  <Link
                    className={cx({
                      app__content_items_item: true,
                      "app__content_items_item-full":
                        activeType === "promotions",
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
        </div>
        {isLoading && (
          <div className={styles.app__loader}>
            <Loader />
          </div>
        )}
        {!isLoading && (
          <div className={styles.app__wrapper_btn}>
            <div className={styles.app__btn}>
              <Button onClick={handleClickButton} disabled={isLoading}>
                Смотреть еще
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
