import React, { useEffect, useState } from "react";
import styles from "./NewsDetails.module.css";
import { useParams } from "react-router-dom";

import TitleBlock from "../components/TitleBlock/TitleBlock";
import DataInfo from "../components/DateInfo/DateInfo";
import ModalBurger from "../components/ModalBurger/ModalBurger";
import Menu from "../components/Menu/Menu";

import { getOneItem } from "../api/endpoint";

const DEFAULT_IMAGE = "src/assets/images/default-card-header.jpg";

const NewsDetails = () => {
  const { id } = useParams();

  const NAV_ITEMS = [
    {
      name: "Избранное",
      url: `/news/${id}`,
    },
    {
      name: "Моя компания",
      url: "/profile",
    },
    {
      name: "Моё развитие",
      url: "#",
    },
    {
      name: "Новости компании",
      url: "#",
    },
    {
      name: "Телефонная книга",
      url: "#",
    },
  ];

  const [newsDetailsData, setNewsDetailsData] = useState(null);

  useEffect(() => {
    getOneItem("news", { id }).then(({ data }) => setNewsDetailsData(data));
  }, []);

  return (
    <div className={styles.news}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__menu}>
          <div className={styles.menu}>
            <Menu items={NAV_ITEMS} />
          </div>
        </div>
        {newsDetailsData && (
          <div className={styles.news__content}>
            <TitleBlock title={<>Новости</>} />
            <div className={styles.content}>
              <div className={styles.date}>
                <DataInfo
                  date={newsDetailsData.pubDate}
                  formatDate="DD MMM YYYY"
                />
              </div>
              <div className={styles.title}>
                <h2>{newsDetailsData.title}</h2>
              </div>
              <div className={styles.wrapper__img}>
                <img
                  src={
                    (newsDetailsData.image || newsDetailsData.link) ??
                    DEFAULT_IMAGE
                  }
                  alt={newsDetailsData.title}
                />
              </div>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: newsDetailsData.fulltext }}
              ></div>
            </div>
          </div>
        )}
      </div>
      <div>
        <ModalBurger menuItems={NAV_ITEMS} />
      </div>
    </div>
  );
};

export default NewsDetails;
