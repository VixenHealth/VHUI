import React, {FC, useEffect, useRef, useState} from "react";
import classNames from "classnames/bind";
import 'normalize.css';

import CloseIcon from "../../assets/close.svg";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export enum SizeErrorMessageValues {
	LARGE = "large",
	SMALL = "small"
}

interface Props {
	message: string;
	description?: string;
	size: SizeErrorMessageValues;
	onClick: (id: number) => void;
	timeToDelete: number;
}

export const ErrorMessage: FC<Props> = ({message, size, description, onClick, timeToDelete}) => {
	const messageRef = useRef<HTMLInputElement>(null)
	const [time, setTime] = useState<number>(timeToDelete)
	const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
	
	useEffect(() => {
		if (messageRef.current) {
			messageRef.current.classList.remove("hide");
		}
		
		if (time) {
			const id = setTimeout(() => {
				if (messageRef.current) {
					messageRef.current.classList.add("hide");
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
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			ref={messageRef}
			className={cx("error-message", size)}
		>
			<div className={cx("error-message__title")}>{message}</div>
			<div className={cx("error-message__description")}>{description}</div>
			<img onClick={() => onClick} src={CloseIcon} alt="close" className={cx("close")}/>
		</div>
	)
}