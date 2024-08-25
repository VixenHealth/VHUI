import React, {forwardRef} from "react";
import {InputHTMLAttributes} from "react";
import classNames from "classnames/bind";
import 'normalize.css'

import {SizeInputValues} from "../../constants/SizeInputValue";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	inputSize: SizeInputValues;
	error: string;
	description?: string;
}

export const EmailInput = forwardRef<HTMLInputElement, Props>(({inputSize, error, description, ...props}, ref) => {
	return (
		<div className={cx("text-field")}>
			{description && <div className={cx("text-field__description")}>{description}</div>}
			<input
				ref={ref}
				type="email"
				className={cx("text-field__input", inputSize, {error})}
				{...props}
			/>
			{error && <div className={cx("text-field__error")}>{error}</div>}
		</div>
	);
});
