import React, {FC} from "react";
import classNames from "classnames/bind";

import {VariantModalDouble} from "../../types/variants";
import CloseIcon from "../../../../assets/modal-close.svg";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export const ModalDouble: FC<VariantModalDouble> = ({style, topContentChildren, bottomContentChildren, onClose, isOpen, isClosing}) => {
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};
	
	return (
		<div style={{...style}} className={cx("content")} onClick={onContentClick}>
			<div onClick={onClose} className={cx("content__close")}>
				<img src={CloseIcon} alt=""/>
			</div>
			<div className={cx("content__top")}>{topContentChildren}</div>
			<div className={cx("content__bottom")}>{bottomContentChildren}</div>
		</div>
	)
}