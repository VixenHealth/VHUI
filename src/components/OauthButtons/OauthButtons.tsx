import classNames from "classnames/bind";

import Vk from "../../assets/icons/vk.svg";
import Yandex from "../../assets/icons/yandex.svg";
import Gosuslugi from "../../assets/icons/gosuslugi.svg";

import styles from "./style.module.scss";
import React from "react";

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
