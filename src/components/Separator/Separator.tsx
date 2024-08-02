import React, {FC} from "react";
import classNames from "classnames/bind";
import 'normalize.css'
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface Props {
	text?: string;
}

export const Separator: FC<Props> = ({text}) => {
	return (
		<>
			{text ? (
				<div className={cx("separator")}>
					<span className={cx("separator__line")}></span>
					<div className="">{text}</div>
					<span className={cx("separator__line")}></span>
				</div>
			) : (
				<span className={cx("separator__line")}></span>
			)}
		</>
	);
};
