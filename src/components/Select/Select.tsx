import React, {FC, useState} from "react"
import classNames from "classnames/bind";
import 'normalize.css'

import SelectOpen from "../../assets/select.svg"

import styles from "./style.module.scss";
import {OutsideClickHandler} from "../OutsideClickHandlerProps";

const cx = classNames.bind(styles);

interface Props {
	title: string;
	variants: string[];
}

export const Select: FC<Props> = ({title, variants}) => {
	const [isOpen, setOpen] = useState(false);
	const [selectVariant, setSelectVariant] = useState(title);
	const [isSelectedVariant, setIsSelectedVariant] = useState(false)
	
	const handleOpen = () => {
		setOpen(!isOpen);
	}
	
	const handleSelectVariant = (variant: string) => {
		setSelectVariant(variant);
		setIsSelectedVariant(true);
	}
	
	const mountedStyle = { animation: "inAnimation 250ms ease-in" };
	const unmountedStyle = {
		animation: "outAnimation 270ms ease-out",
		animationFillMode: "forwards"
	};
	
	console.log(isOpen)
	
	return (
		<OutsideClickHandler onOutsideClick={setOpen}>
			<div className={cx("select")}>
				<div className={cx("select__preview", {isOpen})}>
					<div className={cx("select__title", {isSelectedVariant})}>{selectVariant}</div>
					<img className={cx("select__open")} onClick={handleOpen} src={SelectOpen} alt="select"/>
				</div>
				{isOpen && (
					<div
						className={cx("select__variants")}
						style={isOpen ? mountedStyle : unmountedStyle}
					>
						{variants.map((variant) => (
							<div onClick={() => handleSelectVariant(variant)} className={cx("select__variant")}>{variant}</div>
						))}
					</div>
				)}
			</div>
		</OutsideClickHandler>
	)
}