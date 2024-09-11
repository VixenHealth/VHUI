import React, {FC, useState} from "react"
import classNames from "classnames/bind";
import 'normalize.css'

import SelectOpen from "../../assets/select.svg"
import {OutsideClickHandler} from "../OutsideClickHandlerProps";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	variants: string[];
}

export const Select: FC<Props> = ({title, variants, style}) => {
	const [isOpen, setOpen] = useState(false);
	const [selectVariant, setSelectVariant] = useState(title);
	const [isSelectedVariant, setIsSelectedVariant] = useState(false)
	
	const handleOpen = () => {
		setOpen(!isOpen);
	}
	
	const handleSelectVariant = (variant: string) => {
		setSelectVariant(variant);
		setIsSelectedVariant(true);
		setOpen(false);
	}
	
	const mountedStyle = { animation: "inAnimation 250ms ease-in" };
	const unmountedStyle = {
		animation: "outAnimation 270ms ease-out",
		animationFillMode: "forwards"
	};
	
	return (
		<OutsideClickHandler onOutsideClick={setOpen}>
			<div style={{...style}} className={cx("select")}>
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