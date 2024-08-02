import React from "react";
import {FC} from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";
import 'normalize.css'

const cx = classNames.bind(styles);

interface Props {
	text: string;
}

export const AppLink: FC<Props> = ({text}) => {
	return (
		<div className={cx("link")}>{text}</div>
	);
};
