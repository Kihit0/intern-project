import React from "react";
import styles from "./app.module.css";
import classNames from "classnames/bind";
import Title from "./components/Title/Title";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const type = [
  "news",
  "promotions"
]

const App = () => {
  const [isActiveNews, setIsActiveNews] = React.useState(true);

  const classLinkNews = cx({
    app__links_item: true,
    "app__links_item-active": isActiveNews,
  });

  const classLinkPromotions = cx({
    app__links_item: true,
    "app__links_item-active": !isActiveNews,
  });

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
            <span className={classLinkNews}>Новости</span>
            <span className={classLinkPromotions}>Акции</span>
          </div>
        </div>
        <div className={styles.app__content}>
          <div className={styles.app__content_items}>
            <Link className={styles.app__content_items_item} to="/news/1">
              <Card
                idx={1}
                isActiveNews={isActiveNews}
              />
            </Link>
            <Link className={styles.app__content_items_item} to="/news/1">
              <Card
                idx={2}
                isActiveNews={isActiveNews}
                image="https://img.freepik.com/free-photo/monstera-desktop-wallpaper-background-wet-leaves-vivid-tone_53876-176741.jpg?t=st=1720515352~exp=1720518952~hmac=0208e14be64b582ac7f47247845a8f2b7ca2fc650c434588c4c46fe633f397d5&w=740"
              />
            </Link>
            <Link className={styles.app__content_items_item} to="/news/1">
              <Card
                idx={3}
                isActiveNews={isActiveNews}
                image="https://img.freepik.com/free-photo/monstera-desktop-wallpaper-background-wet-leaves-vivid-tone_53876-176741.jpg?t=st=1720515352~exp=1720518952~hmac=0208e14be64b582ac7f47247845a8f2b7ca2fc650c434588c4c46fe633f397d5&w=740"
              />
            </Link>
            <Link className={styles.app__content_items_item} to="/news/1">
              <Card
                idx={4}
                isActiveNews={isActiveNews}
                image="https://img.freepik.com/free-photo/monstera-desktop-wallpaper-background-wet-leaves-vivid-tone_53876-176741.jpg?t=st=1720515352~exp=1720518952~hmac=0208e14be64b582ac7f47247845a8f2b7ca2fc650c434588c4c46fe633f397d5&w=740"
              />
            </Link>
            <Link className={styles.app__content_items_item} to="/news/1">
              <Card
                idx={5}
                isActiveNews={isActiveNews}
                image="https://img.freepik.com/free-photo/monstera-desktop-wallpaper-background-wet-leaves-vivid-tone_53876-176741.jpg?t=st=1720515352~exp=1720518952~hmac=0208e14be64b582ac7f47247845a8f2b7ca2fc650c434588c4c46fe633f397d5&w=740"
              />
            </Link>
            <Link className={styles.app__content_items_item} to="/news/1">
              <Card
                idx={6}
                isActiveNews={isActiveNews}
                image="https://img.freepik.com/free-photo/monstera-desktop-wallpaper-background-wet-leaves-vivid-tone_53876-176741.jpg?t=st=1720515352~exp=1720518952~hmac=0208e14be64b582ac7f47247845a8f2b7ca2fc650c434588c4c46fe633f397d5&w=740"
              />
            </Link>
            <Link className={styles.app__content_items_item} to="/news/1">
              <Card
                idx={7}
                isActiveNews={isActiveNews}
                image="https://img.freepik.com/free-photo/monstera-desktop-wallpaper-background-wet-leaves-vivid-tone_53876-176741.jpg?t=st=1720515352~exp=1720518952~hmac=0208e14be64b582ac7f47247845a8f2b7ca2fc650c434588c4c46fe633f397d5&w=740"
              />
            </Link>
            <Link className={styles.app__content_items_item} to="/news/1">
              <Card
                idx={8}
                isActiveNews={isActiveNews}
                image="https://img.freepik.com/free-photo/monstera-desktop-wallpaper-background-wet-leaves-vivid-tone_53876-176741.jpg?t=st=1720515352~exp=1720518952~hmac=0208e14be64b582ac7f47247845a8f2b7ca2fc650c434588c4c46fe633f397d5&w=740"
              />
            </Link>
            <Link className={styles.app__content_items_item} to="/news/1">
              <Card
                idx={9}
                isActiveNews={isActiveNews}
                image="https://img.freepik.com/free-photo/monstera-desktop-wallpaper-background-wet-leaves-vivid-tone_53876-176741.jpg?t=st=1720515352~exp=1720518952~hmac=0208e14be64b582ac7f47247845a8f2b7ca2fc650c434588c4c46fe633f397d5&w=740"
              />
            </Link>
            <Link className={styles.app__content_items_item} to="/news/1">
              <Card
                idx={10}
                isActiveNews={isActiveNews}
                image="https://img.freepik.com/free-photo/monstera-desktop-wallpaper-background-wet-leaves-vivid-tone_53876-176741.jpg?t=st=1720515352~exp=1720518952~hmac=0208e14be64b582ac7f47247845a8f2b7ca2fc650c434588c4c46fe633f397d5&w=740"
              />
            </Link>
          </div>
        </div>
        <div className={styles.app__btn}>
          <Button>Смотреть еще</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
