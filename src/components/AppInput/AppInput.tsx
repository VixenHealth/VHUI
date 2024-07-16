import React from "react";
import { FC, InputHTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export enum SizeInputValues {
  BIG = "big",
  MEDIUM = "medium",
  SMALL = "small",
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  inputSize: SizeInputValues;
}

export const AppInput: FC<Props> = ({ placeholder, inputSize }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={cx("input", inputSize)}
    />
  );
};
