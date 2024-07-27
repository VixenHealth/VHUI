import React, {forwardRef, useRef} from "react";
import { FC, InputHTMLAttributes } from "react";
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

export const AppInput = forwardRef<HTMLInputElement, Props>(({ placeholder, inputSize }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      placeholder={placeholder}
      className={cx("input", inputSize)}
    />
  );
});
