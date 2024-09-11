import React, {FC, useState} from "react"
import classNames from "classnames/bind";
import 'normalize.css'

import SelectOpen from "../../assets/select.svg"

import styles from "./style.module.scss";
import {OutsideClickHandler} from "../OutsideClickHandlerProps";

const cx = classNames.bind(styles);

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	variants: string[];
	onSelectVariant?: (variant: string) => void;
}

export const Select: FC<Props> = ({title, variants, style, onSelectVariant}) => {
	const [isOpen, setOpen] = useState(false);
	const [selectVariant, setSelectVariant] = useState(title);
	const [isSelectedVariant, setIsSelectedVariant] = useState(false)
	
	const handleOpen = () => {
		setOpen(!isOpen);
	}
	
	const handleSelectVariant = (variant: string) => {
		if (onSelectVariant) {
			onSelectVariant(variant);
		}
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
						{variants.map((variant, step) => (
							<div key={step} onClick={() => handleSelectVariant(variant)} className={cx("select__variant")}>{variant}</div>
						))}
					</div>
				)}
			</div>
		</OutsideClickHandler>
	)
}