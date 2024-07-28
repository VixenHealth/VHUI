import React, {forwardRef, useEffect, useState} from "react";
import { InputHTMLAttributes } from "react";
import classNames from "classnames/bind";
import 'normalize.css'

import {SizeInputValues} from "../../constants/SizeInputValue";
import HiddenIcon from "../../assets/show_password.svg";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	inputSize: SizeInputValues;
	error: string
}

enum TypeInput {
	PASSWORD = "password",
	TEXT = "text",
}

export const PasswordInput = forwardRef<HTMLInputElement, Props>(({ inputSize, error, ...props}, ref) => {
	const [isHidden, setIsHidden] = useState(false);
	let type: TypeInput = TypeInput.PASSWORD;
	
	useEffect(() => {
		type = isHidden ? TypeInput.PASSWORD : TypeInput.TEXT;
	}, [isHidden]);
	
	const toggleIsHidden = () => {
		setIsHidden(!isHidden);
	}
	
	return (
		<div className={cx("text-field")}>
			<input
				ref={ref}
				type={type}
				className={cx("text-field__input", inputSize, {error})}
				{...props}
			/>
			<div onClick={toggleIsHidden} className={cx("show-password")}>
				<HiddenIcon />
			</div>
			{error && <div className={cx("text-field__error")}>{error}</div>}
		</div>
	);
});
