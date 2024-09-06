import React, {FC, useEffect, useRef, useState} from "react";
import classNames from "classnames/bind";
import 'normalize.css';

import CloseIcon from "../../assets/close.svg";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export enum SizeMessageValues {
	LARGE = "large",
	SMALL = "small"
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	message: string;
	description?: string;
	size: SizeMessageValues;
	onClick: () => void;
	timeToDelete: number;
}

export const Message: FC<Props> = ({message, size, description, onClick, timeToDelete, style}) => {
	const messageRef = useRef<HTMLInputElement>(null)
	const [time, setTime] = useState<number>(timeToDelete)
	const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
	
	useEffect(() => {
		if (messageRef.current) {
			messageRef.current.classList.remove(cx("hide"));
		}
		
		if (time) {
			const id = setTimeout(() => {
				if (messageRef.current) {
					messageRef.current.classList.add(cx("hide"));
				}
			}, time - 2000);
			setTimerId(id);
		}
		
		return () => {
			if (timerId) {
				clearTimeout(timerId);
			}
		};
	}, [time, timeToDelete]);
	
	const handleMouseEnter = () => {
		setTime(timeToDelete * 2);
		if (timerId) {
			clearTimeout(timerId);
		}
	};
	
	const handleMouseLeave = () => {
		setTime(timeToDelete);
	};
	
	return (
		<div
			style={{...style}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			ref={messageRef}
			className={cx("error-message", size)}
		>
			<div className={cx("error-message__title")}>{message}</div>
			<div className={cx("error-message__description")}>{description}</div>
			<img onClick={onClick} src={CloseIcon} alt="close" className={cx("close")}/>
		</div>
	)
}