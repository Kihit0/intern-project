import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";

import TitleBlock from "../components/TitleBlock/TitleBlock";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import Tabs from "../components/Tabs/Tabs";
import CardList from "../components/CardList/CardList";

import { getManyItems } from "../api/endpoint";

const tabsData = [
  {
    name: ["news", "Новости"],
    active: true,
    view: ["default", "background"],
    stepPagination: 5,
  },
  {
    name: ["promotions", "Акции"],
    active: false,
    view: "row",
    stepPagination: 3,
  },
];

const Main = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [pagination, setPagination] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [totalData, setTotalData] = useState(null);
  const [data, setData] = useState([]);

  const getTabData = () => {
    return tabsData.find((item) => item.name.indexOf(activeTab) !== -1);
  };

  const handleClickTabActive = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setTotalData(0);
      setPagination(0);
      setData([]);

      tabsData.forEach((item) => {
        if (item.name.indexOf(tab) !== -1) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    }
  };

  const handleClickAddData = () => {
    if (!isLoading) {
      setIsLoading(true);
      setPagination((value) => value + getTabData().stepPagination);
    }
  };

  useEffect(() => {
    getManyItems(activeTab).then((item) => {
      item.data.forEach((item) =>
        Object.assign(item, { stats: { likes: 123, comments: 67, views: 85 } })
      );

      setData((value) =>
        value.concat(
          item.data.slice(pagination, pagination + getTabData().stepPagination)
        )
      );
      setTotalData(item.total);
      setIsLoading(false);
    });
  }, [activeTab, pagination]);

  return (
    <div>
      <div className={styles.main__title}>
        <TitleBlock
          title={
            <>
              Получите <span className={styles.accent}>максимум</span> от отдела
              продаж
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
        </TitleBlock>
      </div>
      <div className={styles.main__tabs}>
        <div className={styles.main__tabs_wrapper}>
          <Tabs onClick={handleClickTabActive} tabs={tabsData} />
        </div>
      </div>
      <div className={styles.main__content}>
        <CardList data={data} view={getTabData().view} tabActive={activeTab} />
      </div>
      {isLoading && (
        <div className={styles.main__loader}>
          <Loader />
        </div>
      )}
      {totalData && totalData !== data.length && (
        <div className={styles.main__wrapper_btn}>
          <div className={styles.main__btn}>
            <Button onClick={handleClickAddData} disabled={isLoading}>
              Смотреть еще
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
