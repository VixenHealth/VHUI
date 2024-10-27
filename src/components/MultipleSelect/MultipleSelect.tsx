import React, {FC, InputHTMLAttributes, ReactNode, useState} from "react"
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface ListItem {
	icon?: ReactNode;
	text: string;
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	selectList: ListItem[];
	onSelectVariant?: (variant: string) => void;
}

export const MultipleSelect: FC<Props> = ({selectList, onSelectVariant, style}) => {
	const [selectVariant, setSelectVariant] = useState('');
	
	const handleSelectVariant = (variant: string) => {
		if (onSelectVariant) {
			onSelectVariant(variant);
		}
		setSelectVariant(variant);
	}
	
	return (
		<div style={{...style}} className={cx("select-list")}>
			{selectList.map((item) => (
				<div key={item.text} onClick={() => handleSelectVariant(item.text)} className={cx("select-list__item", {
					"selected": selectVariant === item.text,
				})}>
					<div className={cx("select-list__icon")}>
						{item.icon && item.icon}
					</div>
					<div className={cx("select-list__text")}>
						{item.text}
					</div>
				</div>
			))}
		</div>
	)
}