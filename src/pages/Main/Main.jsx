import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";

import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Tabs from "../../components/Tabs/Tabs";
import CardList from "../../components/CardList/CardList";

const TABS_DATA = [
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
          <Tabs tabs={TABS_DATA}>
            {TABS_DATA.map((item, idx) => (
              <div className={styles.main__content} key={idx}>
                <CardList
                  view={item.view}
                  stepPagination={item.stepPagination}
                  endpoint={item.endpoint}
                />
              </div>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Main;
