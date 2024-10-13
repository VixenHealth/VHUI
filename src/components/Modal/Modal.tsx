import React, {FC, useCallback, useEffect, useRef, useState,} from "react";
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

type ModalProps = VariantModalBase & VariantModalDouble & {variant: ModalVariants};

const ANIMATION_DELAY = 400;

export const Modal: FC<ModalProps> = ({onClose, isOpen, variant, ...props}) => {
	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	
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
	console.log(ModalComponent)
	console.log(variant)
	
	return (
		<Portal>
			<div className={cx("modal", {isOpen, isClosing})}>
				<div className={cx("overlay")} onClick={handleClose}>
					<ModalComponent {...props} />
				</div>
			</div>
		</Portal>
	);
};

