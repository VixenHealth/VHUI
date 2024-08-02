import React, {forwardRef, useEffect, useRef, useState} from "react";
import {InputHTMLAttributes} from "react";
import classNames from "classnames/bind";
import 'normalize.css'

import {Dots} from "./components/Dot";
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

const DOT_COUNT = 200;
const SYMBOL_WIDTH = 7;

export const PasswordInput = forwardRef<HTMLInputElement, Props>(({inputSize, error, ...props}, ref) => {
	const [isHidden, setIsHidden] = useState(true);
	const [inputValue, setInputValue] = useState('');
	const [inputValueWidth, setInputValueWidth] = useState(0);
	const [dotCount, setDotCount] = useState(0);
	const inputValueRef = useRef<HTMLInputElement>(null);
	
	useEffect(() => {
		setInputValueWidth(inputValue.length * SYMBOL_WIDTH)
	}, [inputValueRef.current, inputValue]);
	
	console.log(inputValueWidth)
	
	useEffect(() => {
		setDotCount(inputValueWidth * 5)
	}, [inputValueWidth]);
	
	const toggleIsHidden = () => {
		setIsHidden(!isHidden);
	}
	
	return (
		<div className={cx("text-field")}>
			<div className={cx("text-field__wrapper")}>
				<input
					ref={ref}
					type={isHidden ? TypeInput.PASSWORD : TypeInput.TEXT}
					className={cx("text-field__input", inputSize, {error})}
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
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
