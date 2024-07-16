import React, { useEffect, useRef, useState } from "react";
import styles from "./NewsDetails.module.css";

import TitleBlock from "../components/TitleBlock/TitleBlock";
import DataInfo from "../components/DateInfo/DateInfo";
import { useParams } from "react-router-dom";

import { getOneItem } from "../api/endpoint";
import ModalBurger from "../components/ModalBurger/ModalBurger";
import Menu from "../components/Menu/Menu";
import classNames from "classnames/bind";

const DEFAULT_IMAGE = "src/assets/images/default-card-header.jpg";

const NAV_ITEMS = [
  "Избранное",
  "Моя компания",
  "Моё развитие",
  "Новости компании",
  "Телефонная книга",
];

const cx = classNames.bind(styles);

const NewsDetails = () => {
  const { id } = useParams();

  const [newsDetailsData, setNewsDetailsData] = useState(null);
  const [shouldShowModalBurger, setShouldShowModalBurger] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const onClose = () => {
    setShouldShowModalBurger(false);
  };

  const onOpen = () => {
    setShouldShowModalBurger(true);
  };

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 1280) {
        setIsShowMenu(true);
      } else {
        setIsShowMenu(false);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    getOneItem("news", { id }).then(({ data }) => setNewsDetailsData(data));
  }, []);

  return (
    <div className={styles.news}>
      <div className={styles.wrapper}>
        {isShowMenu && (
          <div className={styles.wrapper__menu}>
            <div className={styles.menu}>
              <Menu items={NAV_ITEMS} />
            </div>
          </div>
        )}
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
                  className={styles.img}
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
      <div className={cx({ show__modal_burger: !shouldShowModalBurger })}>
        <ModalBurger menuItems={NAV_ITEMS} onClose={onClose} onOpen={onOpen} />
      </div>
    </div>
  );
};

export default NewsDetails;
