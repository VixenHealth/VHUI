import React, {FC, forwardRef} from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";
import 'normalize.css'

const cx = classNames.bind(styles);

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	label: string;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AppRadioButtons: FC<Props> = forwardRef<HTMLInputElement, Props>(({
	                                                                           label,
	                                                                           style,
	                                                                           ...props
                                                                           }, ref) => {
	return (
		<label style={{...style}} className={cx("app-radio-buttons")}>
			<input
				ref={ref}
				className={cx("app-radio-buttons__input")}
				type="radio"
				{...props}
			/>
			<span className={cx("app-radio-buttons__box")}></span>
			<span className={cx("app-radio-buttons__label")}>{label}</span>
		</label>
	);
});