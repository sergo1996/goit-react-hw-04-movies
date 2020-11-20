import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const NotFound = () => (
  <div className={style.container}>
    <img
      src="https://i.ibb.co/VvDsnJf/thumb-404-page-not-found-creative-metal-grid-background-404-page-not-found-symbol-brands.jpg"
      alt="not_found"
    />
    <p>
      Страница не найдена! Перейти на главную страницу можно по{" "}
      <Link to="/">ссылке</Link>.
    </p>
  </div>
);

export default NotFound;
