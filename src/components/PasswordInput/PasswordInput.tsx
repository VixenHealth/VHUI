import React, {forwardRef, useState} from "react";
import {InputHTMLAttributes} from "react";
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
	description?: string;
}

enum TypeInput {
	PASSWORD = "password",
	TEXT = "text",
}

export const PasswordInput = forwardRef<HTMLInputElement, Props>(({inputSize, error, description, ...props}, ref) => {
	const [isHidden, setIsHidden] = useState(true)
	
	const toggleIsHidden = () => {
		setIsHidden(!isHidden);
	}
	
	return (
		<div className={cx("text-field")}>
			{description && <div className={cx("text-field__description")}>{description}</div>}
			<div className={cx("text-field__wrapper")}>
				<input
					ref={ref}
					type={isHidden ? TypeInput.PASSWORD : TypeInput.TEXT}
					className={cx("text-field__input", inputSize, {error})}
					{...props}
				/>
				<div onClick={toggleIsHidden} className={cx("show-password")}>
					<img alt="hidden" src={HiddenIcon}/>
				</div>
			</div>
			{error && <div className={cx("text-field__error")}>{error}</div>}
		</div>
	);
});
