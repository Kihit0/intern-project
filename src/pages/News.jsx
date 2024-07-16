import React, { useEffect, useRef, useState } from "react";
import styles from "./News.module.css";

import TitleBlock from "../components/TitleBlock/TitleBlock";
import DataInfo from "../components/DateInfo/DateInfo";
import { useHref, useParams } from "react-router-dom";

import { getOneItem } from "../api/endpoint";
import Burger from "../components/Burger/Burger";
import Menu from "../components/Menu/Menu";

const DEFAULT_IMAGE = "src/assets/images/default-card-header.jpg";

const NAV_ITEMS = [
  "Избранное",
  "Моя компания",
  "Моё развитие",
  "Новости компании",
  "Телефонная книга",
];

const body = document.querySelector("body");
const header = document.getElementById("header");
const burger = document.getElementById("burger");

const News = () => {
  const { id } = useParams();
  const url = useHref()
    .split("/")
    .filter((item) => item)[0];

  const [item, setItems] = useState(null);
  const [isShowModalBurger, setIsShowModalBurger] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const newsRef = useRef(null);

  const onClose = () => {
    setIsShowModalBurger(false);
    body.classList.remove("hidden");
  };

  useEffect(() => {
    const updateHeight = () => {
      if (newsRef.current && newsRef.current.clientWidth >= 1240) {
        setIsShowModalBurger(false);
        setIsShowMenu(true);
        header.classList.remove("header__with_burger");
      } else {
        setIsShowMenu(false);
        header.classList.add("header__with_burger");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    burger.addEventListener("click", () => {
      body.classList.add("hidden");
      setIsShowModalBurger(true);
    });

    return () => {
      header.classList.remove("header__with_burger");
      body.classList.remove("hidden");
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    getOneItem(url, { id }).then(({ data }) => setItems(data));
  }, []);

  return (
    <div className={styles.news} ref={newsRef}>
      <div className={styles.wrapper}>
        {isShowModalBurger && (
          <Burger linkItems={NAV_ITEMS} onClose={onClose} />
        )}
        {isShowMenu && (
          <div className={styles.wrapper__menu}>
            <div className={styles.menu}>
              <Menu items={NAV_ITEMS} />
            </div>
          </div>
        )}
        {item && (
          <div className={styles.news__content}>
            <TitleBlock title={<>Новости</>} />
            <div className={styles.content}>
              <div className={styles.date}>
                <DataInfo date={item.pubDate} viewDate="DD MMM YYYY" />
              </div>
              <div className={styles.title}>
                <h2>{item.title}</h2>
              </div>
              <div className={styles.wrapper__img}>
                <img
                  className={styles.img}
                  src={(item.image || item.link) ?? DEFAULT_IMAGE}
                  alt={item.title}
                />
              </div>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: item.fulltext }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
