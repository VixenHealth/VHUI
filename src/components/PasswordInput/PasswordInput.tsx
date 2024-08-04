import React, {forwardRef,  useRef, useState} from "react";
import {InputHTMLAttributes} from "react";
import classNames from "classnames/bind";
import 'normalize.css'

import {SizeInputValues} from "../../constants/SizeInputValue";
import HiddenIcon from "../../assets/show_password.svg";
import {mergeRefs} from "../../utils/mergeRefs";

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

export const PasswordInput = forwardRef<HTMLInputElement, Props>(({inputSize, error, ...props}, ref) => {
	const [isHidden, setIsHidden] = useState(true);
	const inputValueRef = useRef<HTMLInputElement>(null);
	
	const toggleIsHidden = () => {
		setIsHidden(!isHidden);
	}
	
	return (
		<div className={cx("text-field")}>
			<div className={cx("text-field__wrapper")}>
				<input
					ref={mergeRefs([ref, inputValueRef])}
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
