import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const resetDot = (dot: HTMLDivElement) => {
	const minLifetime = 2000;
	const maxLifetime = 5000;
	const x = Math.random() * 200 - 100;
	const y = Math.random() * 100 - 50;
	dot.style.setProperty('--x', `${x}px`);
	dot.style.setProperty('--y', `${y}px`);
	const lifetime = Math.random() * (maxLifetime - minLifetime) + minLifetime;
	const smallLifetime = `${lifetime / 1000}s`;
	dot.style.animationDuration = smallLifetime;
	dot.style.animation = 'none';
	dot.offsetHeight;
	dot.style.animation = `${cx("move")} ${smallLifetime} linear, ${cx("fadeOut")} ${smallLifetime} ease-out forwards`;
	setTimeout(() => {
		
		resetDot(dot)
	}, lifetime);
	console.log("re-render")
};

export const Dots: React.FC<{ dotCount: number }> = ({dotCount}) => {
	const dotsContainerRef = useRef<HTMLDivElement | null>(null);
	const [dots] = useState<HTMLDivElement[]>([]);
	
	useEffect(() => {
		const dotsContainer = dotsContainerRef.current;
		if (!dotsContainer) return;
		for (let i = 0; i < dotCount; i++) {
			const dot = document.createElement('div');
			dot.classList.add(cx('dot'));
			dot.style.top = `${Math.random() * 100}%`;
			dot.style.left = `${Math.random() * 100}%`;
			dotsContainer.appendChild(dot);
			dots.push(dot);
			resetDot(dot);
		}
	}, []);
	
	
	useEffect(() => {
		const dotsContainer = dotsContainerRef.current;
		if (!dotsContainer) return;
		
		return () => {
			dots.forEach(dot => dotsContainer.removeChild(dot));
		};
	}, [dotCount]);
	
	return <div className={cx("dots")} ref={dotsContainerRef}></div>;
};
