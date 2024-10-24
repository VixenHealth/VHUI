import React, {FC, ReactNode} from "react"
import classNames from "classnames/bind";

import styles from "./style.module.scss";
import 'normalize.css'

const cx = classNames.bind(styles);

interface Props {
	children: ReactNode;
	render: ReactNode | string;
}

export const Tooltip: FC<Props> = ({render, children}) => {
	return (
		<div className={cx("tooltip-container")}>
			<div className={cx("tooltip")}>
				<div className={cx("tooltip__content")}>
					{render}
				</div>
			</div>
			{children}
		</div>
	)
}