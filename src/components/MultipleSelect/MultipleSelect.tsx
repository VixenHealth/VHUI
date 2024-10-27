import React, {FC, ReactNode, useState} from "react"
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface ListItem {
	icon?: ReactNode;
	text: string;
}

interface Props {
	selectList: ListItem[];
}

export const MultipleSelect: FC<Props> = ({selectList}) => {
	const [selectVariant, setSelectVariant] = useState('');
	
	const handleSelectVariant = (variant: string) => {
		setSelectVariant(variant);
	}
	
	console.log(selectVariant)
	
	return (
		<div className={cx("select-list")}>
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