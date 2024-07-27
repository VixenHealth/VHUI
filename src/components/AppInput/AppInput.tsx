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
  error: string
}

export const AppInput = forwardRef<HTMLInputElement, Props>(({ inputSize, error, ...props}, ref) => {
  return (
    <div className={cx("text-field")}>
      <input
        ref={ref}
        type="text"
        className={cx("text-field__input", inputSize, {error})}
        {...props}
      />
      {error && <div className={cx("text-field__error")}>{error}</div>}
    </div>
  )
    ;
});
