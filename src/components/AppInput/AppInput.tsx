import React, { forwardRef } from "react";
import { InputHTMLAttributes } from "react";
import classNames from "classnames/bind";
import 'normalize.css'

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

export const AppInput = forwardRef<HTMLInputElement, Props>(({ inputSize, ...props}, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className={cx("input", inputSize)}
      {...props}
    />
  );
});
