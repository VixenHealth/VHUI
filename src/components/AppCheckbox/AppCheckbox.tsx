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

export const AppCheckbox: FC<Props> = forwardRef<HTMLInputElement, Props>(({
	                                                                           label,
	                                                                           checked,
	                                                                           onChange,
	                                                                           style,
	                                                                           ...props
                                                                           }, ref) => {
	return (
		<label style={{...style}} className={cx("app-checkbox")}>
			<input
				ref={ref}
				className={cx("app-checkbox__input")}
				checked={checked}
				onChange={onChange}
				type="checkbox"
				{...props}
			/>
			<span className={cx("app-checkbox__box")}></span>
			<span className={cx("app-checkbox__label")}>{label}</span>
		</label>
	);
});
