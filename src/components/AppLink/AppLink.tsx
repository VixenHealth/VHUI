import React from "react";
import {FC} from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";
import 'normalize.css'

const cx = classNames.bind(styles);

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	text: string;
}

export const AppLink: FC<Props> = ({text, style}) => {
	return (
		<div style={{...style}} className={cx("link")}>{text}</div>
	);
};
