import React, {FC} from "react";
import classNames from "classnames/bind";
import 'normalize.css'
import styles from "./style.module.scss";

export enum SizeMainTitleValues {
	BIG = "big",
	MEDIUM = "medium",
	SMALL = "small",
}

interface Props {
	size: SizeMainTitleValues;
	text: string;
}

const cx = classNames.bind(styles);

export const MainTitle: FC<Props> = ({text, size}) => {
	return <h1 className={cx("title", size)}>{text}</h1>;
};
