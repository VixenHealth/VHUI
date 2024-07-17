import React, { FC } from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";
import '../../normalize.css';

const cx = classNames.bind(styles);

interface Props {
  text?: string;
}

export const Separator: FC<Props> = ({ text }) => {
  return (
    <>
      {text ? (
        <div className={cx("separator")}>
          <span className={cx("separator__line")}></span>
          <div className="">{text}</div>
          <span className={cx("separator__line")}></span>
        </div>
      ) : (
        <span className={cx("separator__line")}></span>
      )}
    </>
  );
};
