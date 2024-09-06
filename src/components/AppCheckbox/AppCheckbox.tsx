import React, {FC} from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";
import 'normalize.css'

const cx = classNames.bind(styles);

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	label: string;
	id: string;
}

export const AppCheckbox: FC<Props> = ({label, id, style}) => {
	return (
		<div style={{...style}} className={cx("app-checkbox")}>
			<input className={cx("app-checkbox__input")} type="checkbox" id={id}/>
			<label className={cx("app-checkbox__label")} htmlFor={id}>
				{label}
			</label>
		</div>
	);
};
