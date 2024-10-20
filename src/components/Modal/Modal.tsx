import React, {FC, useCallback, useEffect, useLayoutEffect, useRef, useState,} from "react";
import classNames from "classnames/bind";

import {Portal} from "./Portal";
import {ModalBase} from "./Components/ModalBase";
import {ModalVariants, VariantModalBase, VariantModalDouble} from "./types/variants";
import {ModalDouble} from "./Components/ModalDouble";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export const ModalVariantsComponents = {
	[ModalVariants.BASE]: ModalBase,
	[ModalVariants.DOUBLE]: ModalDouble
}

type ModalProps =
	| ({ variant: ModalVariants.BASE } & Omit<VariantModalBase, "isClosing" | "isOpening">)
	| ({ variant: ModalVariants.DOUBLE } & Omit<VariantModalDouble, "isClosing" | "isOpening">);

const ANIMATION_DELAY = 400;

export const Modal: FC<ModalProps> = ({onClose, isOpen, variant, ...props}) => {
	const [isClosing, setIsClosing] = useState(false);
	const [isOpening, setIsOpening] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add(cx("no-scroll"));
		} else {
			document.body.classList.remove(cx("no-scroll"));
		}
		
		return () => {
			document.body.classList.remove(cx("no-scroll"));
		};
	}, [isOpen]);
	
	useLayoutEffect(() => {
		if (isOpen) {
			setIsOpening(true);
			timerRef.current = setTimeout(() => {
				setIsOpening(false);
			}, ANIMATION_DELAY);
		}
	}, [isOpen]);
	
	const handleClose = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);
	
	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				handleClose();
			}
		},
		[handleClose],
	);
	
	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown);
		}
		
		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen, onKeyDown]);
	
	const ModalComponent = ModalVariantsComponents[variant];
	
	return (
		<Portal>
			<div className={cx("modal", {isOpen, isClosing})}>
				<div className={cx("overlay")} onClick={handleClose}>
					<ModalComponent
						isOpening={isOpening}
						isClosing={isClosing}
						isOpen={isOpen}
						onClose={onClose}
						{...props}
					/>
				</div>
			</div>
		</Portal>
	);
};

