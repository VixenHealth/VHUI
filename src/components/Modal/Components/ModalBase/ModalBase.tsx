import React, {FC} from "react";
import classNames from "classnames/bind";

import {VariantModalBase} from "../../types/variants";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export const ModalBase: FC<VariantModalBase> = ({style, children }) => {
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};
	
	return (
		<div style={{...style}} className={cx("content")} onClick={onContentClick}>
			{children}
		</div>
	)
}