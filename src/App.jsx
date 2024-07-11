import React from "react";
import styles from "./app.module.css";

import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Links from "./components/Links/Links";
import CardList from "./components/CardList/CardList";
import { getManyItem } from "./api/endpoint";

const stepPagination = {
  news: 5,
  promotions: 3,
};

const App = () => {
  const [activeType, setActiveType] = React.useState("news");
  const [pagination, setPagination] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

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
    setIsLoading(true);
    setPagination((value) => value + stepPagination[activeType]);
  };

  React.useEffect(() => {
    getManyItem(activeType).then((item) => {
      setData((value) =>
        value.concat(
          item.slice(pagination, pagination + stepPagination[activeType])
        )
      );
      setIsLoading(false);
    });
  }, [activeType, pagination]);

  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <div className={styles.app__title}>
          <Title
            title={
              <>
                Получите <span className={styles.accent}>максимум</span> от
                отдела продаж
              </>
            }
          >
            <>
              amoCRM — это полный набор инструментов, которые раскроют потенциал
              вашего отдела продаж и повысят его эффективность. Считается лучшей
              CRM-системой по версии
              <span className={`${styles.accent} ${styles.link}`}>
                crmrating.ru
              </span>
            </>
          </Title>
        </div>
        <div className={styles.app__links}>
          <div className={styles.app__links_wrapper}>
            <Links onClick={handleClickLink} activeType={activeType} />
          </div>
        </div>
        <div className={styles.app__content}>
          <CardList data={data} activeType={activeType} />
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
