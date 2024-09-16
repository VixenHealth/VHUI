import React, {FC} from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";
import 'normalize.css'

const cx = classNames.bind(styles);

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	label: string;
	id: string;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AppCheckbox: FC<Props> = ({
	                                       label,
	                                       id,
	                                       checked,
	                                       onChange,
	                                       style
                                       }) => {
	return (
		<label style={{...style}} className={cx("app-checkbox")} htmlFor={id}>
			<input
				className={cx("app-checkbox__input")}
				checked={checked}
				onChange={onChange}
				type="checkbox" id={id}
			/>
			<span className="app-checkbox__box"></span>
			<span className="app-checkbox__label">{label}</span>
		</label>
	);
};
