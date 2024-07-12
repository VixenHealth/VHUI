import { FC } from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";
import React from "react";

const cx = classNames.bind(styles);

interface Props {
  label: string;
  id: string;
}

export const AppCheckbox: FC<Props> = ({ label, id }) => {
  return (
    <div className={cx("app-checkbox")}>
      <input className={cx("app-checkbox__input")} type="checkbox" id={id} />
      <label className={cx("app-checkbox__label")} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};