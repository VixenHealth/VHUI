import React, {FC, ReactNode} from "react"
import classNames from "classnames/bind";

import styles from "./style.module.scss";
import 'normalize.css'

const cx = classNames.bind(styles);

interface Props {
	children: ReactNode;
	title: string;
}

export const Tooltip: FC<Props> = ({title, children}) => {
	return (
		<div className={cx("tooltip-container")}>
			<div className={cx("tooltip")}>
				<div className={cx("tooltip__content")}>
					{title}
				</div>
			</div>
			{children}
		</div>
	)
}