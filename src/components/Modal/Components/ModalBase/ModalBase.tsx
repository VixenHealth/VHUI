import React, {FC} from "react";
import classNames from "classnames/bind";

import {VariantModalBase} from "../../types/variants";

import styles from "./style.module.scss";
import CloseIcon from "../../../../assets/modal-close.svg";

const cx = classNames.bind(styles);

export const ModalBase: FC<VariantModalBase> = ({style, children, onClose, isClosing, isOpening}) => {
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};
	
	return (
		<div style={{...style}} className={cx("content", {isClosing, isOpening})} onClick={onContentClick}>
			<div onClick={onClose} className={cx("content__close")}>
				<img src={CloseIcon} alt=""/>
			</div>
			{children}
		</div>
	)
}