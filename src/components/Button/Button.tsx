import React, {ReactNode} from "react";
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
	icon?: ReactNode;
}

export const Button: FC<Props> = ({
	                                  text,
	                                  size,
	                                  color = ColorButtonValues.DARK,
	                                  style,
	                                  icon,
	                                  ...props
                                  }) => {
	return (
		<button style={{...style}} className={cx("button", size, color)} {...props}>
			<span className={cx("button__content")}>
				{text}
				{icon && (
					<span className={cx("button__icon")}>{icon}</span>
				)}
			</span>
		</button>
	);
};
