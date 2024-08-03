import React, {forwardRef, useEffect, useRef, useState} from "react";
import {InputHTMLAttributes} from "react";
import classNames from "classnames/bind";
import 'normalize.css'

import {Dots} from "./components/Dot";
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

const DOT_COUNT = 200;
const SYMBOL_WIDTH = 7;

export const PasswordInput = forwardRef<HTMLInputElement, Props>(({inputSize, error, ...props}, ref) => {
	const [isHidden, setIsHidden] = useState(true);
	const [inputValueWidth, setInputValueWidth] = useState(0);
	const inputValueRef = useRef<HTMLInputElement>(null);
	
	useEffect(() => {
		const handleInput = () => {
			if (inputValueRef.current) {
				setInputValueWidth(inputValueRef.current.value.length * SYMBOL_WIDTH);
			}
		};
		const inputElement = inputValueRef.current;
		if (inputElement) {
			inputElement.addEventListener('input', handleInput);
		}
	}, [inputValueRef.current]);
	
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
				{isHidden && !!inputValueWidth && (
					<div style={{width: inputValueWidth}} className={cx("spoiler")}>
						<div className={cx("spoiler__container")}>
							<Dots dotCount={DOT_COUNT}/>
						</div>
					</div>
				)}
			</div>
			{error && <div className={cx("text-field__error")}>{error}</div>}
		</div>
	);
});
