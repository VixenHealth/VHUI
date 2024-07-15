import React from "react";
import classNames from "classnames/bind";
import Vk from "../../assets/vk.svg";
import Yandex from "../../assets/yandex.svg";
import Gosuslugi from "../../assets/gosuslugi.svg";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export const OauthButtons = () => {
  return (
    <ul className={cx("socials")}>
      <li className={cx("socials__item")}>
        <a className={cx("socials-item__link")} href="">
          <Vk />
        </a>
      </li>
      <li className={cx("socials__item")}>
        <a className={cx("socials-item__link")} href="">
          <Yandex />
        </a>
      </li>
      <li className={cx("socials__item")}>
        <a className={cx("socials-item__link")} href="">
          <Gosuslugi />
        </a>
      </li>
    </ul>
  );
};
