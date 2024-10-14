import React, {FC} from "react";
import classNames from "classnames/bind";

import {VariantModalBase} from "../../types/variants";

import styles from "./style.module.scss";
import CloseIcon from "../../../../assets/modal-close.svg";

const cx = classNames.bind(styles);

export const ModalBase: FC<VariantModalBase> = ({style, children, onClose }) => {
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};
	
	return (
		<div style={{...style}} className={cx("content")} onClick={onContentClick}>
			<div onClick={onClose} className={cx("content__close")}>
				<img src={CloseIcon} alt=""/>
			</div>
			{children}
		</div>
	)
}