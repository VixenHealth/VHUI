import React, {FC} from "react";
import classNames from "classnames/bind";
import 'normalize.css';

import CloseIcon from "../../assets/close.svg";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export enum SizeErrorMessageValues {
	LARGE = "large",
	SMALL = "small"
}

interface Props {
	message: string;
	description?: string;
	size: SizeErrorMessageValues;
}

export const ErrorMessage: FC<Props> = ({message, size, description}) => {
	return (
		<div className={cx("error-message", size)}>
			<div className={cx("error-message__title")}>{message}</div>
			<div className={cx("error-message__description")}>{description}</div>
			<img src={CloseIcon} alt="close" className={cx("close")}/>
		</div>
	)
}