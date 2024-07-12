import { FC } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";
import React from "react";

const cx = classNames.bind(styles);

interface Props {
  text: string;
}

export const AppLink: FC<Props> = ({ text }) => {
  return (
    <Link to="/">
      <div className={cx("link")}>{text}</div>
    </Link>
  );
};