import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";

import TitleBlock from "../components/TitleBlock/TitleBlock";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import Tabs from "../components/Tabs/Tabs";
import CardList from "../components/CardList/CardList";

const tabsData = [
  {
    name: "Новости",
    view: ["default", "background"],
    endpoint: "news",
    stepPagination: 5,
  },
  {
    name: "Акции",
    view: "row",
    endpoint: "promotions",
    stepPagination: 3,
  },
];

const Main = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0]);
  const [pagination, setPagination] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowButton, setIsShowButton] = useState(true);

  const handleClickTabActive = (tab) => {
    const { name } = tab;

    if (name !== activeTab.name) {
      setActiveTab(tab);
      setPagination(0);
    }
  };

  const handleClickAddData = () => {
    if (!isLoading) {
      setIsLoading(true);
      setPagination(pagination + activeTab.stepPagination);
    }
  };

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
          <Tabs
            onClick={handleClickTabActive}
            tabs={tabsData}
            activeTab={activeTab}
          />
        </div>
      </div>
      <div className={styles.main__content}>
        <CardList
          isLoading
          activeTab={activeTab}
          pagination={pagination}
          onIsLoading={setIsLoading}
          onIsShowButton={setIsShowButton}
        />
      </div>
      {isLoading && (
        <div className={styles.main__loader}>
          <Loader />
        </div>
      )}
      {isShowButton && (
        <div className={styles.main__wrapper_btn}>
          <div className={styles.main__btn}>
            <Button onClick={handleClickAddData} isDisabled={isLoading}>
              Смотреть еще
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
