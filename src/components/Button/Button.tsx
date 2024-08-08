import React from "react";
import {ButtonHTMLAttributes, FC} from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";
import 'normalize.css'

const cx = classNames.bind(styles);

export enum SizeButtonValues {
	BIG = "big",
	MEDIUM = "medium",
	SMALL = "small",
}

export enum ColorButtonValues {
	DARK = "dark",
	NEUTRAL = "neutral",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	size: SizeButtonValues;
	color?: ColorButtonValues;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const Button: FC<Props> = ({
	                                  text,
	                                  size,
	                                  color = ColorButtonValues.DARK,
	                                  type = "submit"
                                  }) => {
	return <button type={type} className={cx("button", size, color)}>{text}</button>;
};
