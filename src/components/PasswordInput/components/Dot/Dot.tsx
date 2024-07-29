import React, {useEffect, useRef} from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export const Dot = () => {
	const ref = useRef(null);
	const minLifetime = 2000; // Минимальное время жизни точки в миллисекундах
	const maxLifetime = 5000; // Максимальное время жизни точки в миллисекундах
	
	const getStyles = () => {
		const x: string = `${Math.random() * 100}%`;
		const y: string = `${Math.random() * 100}%`;
		
		return {
			top: x,
			left: y,
		}
	}
	
	function resetDot(dot: any) {
		const x = Math.random() * 200 - 100;
		const y = Math.random() * 100 - 50;
		dot.style.setProperty('--x', `${x}px`);
		dot.style.setProperty('--y', `${y}px`);
		
		const lifetime = (Math.random() * (maxLifetime - minLifetime) + minLifetime);
		const small_lifetime = `${lifetime / 1000}s`
		dot.style.animationDuration = small_lifetime;
		
		dot.style.animation = 'none';
		dot.offsetHeight;
		dot.style.animation = `move ${small_lifetime} linear, fadeOut ${small_lifetime} ease-out forwards`;
		
		setTimeout(() => {
			resetDot(dot);
		}, 0);
	}
	
	useEffect(() => {
		resetDot(ref.current);
	}, [ref.current]);
	
	return (
		<div
			ref={ref}
			className={cx("dot")}
			style={getStyles()}
		></div>
	);
}