import React from "react";
import {FC, useEffect, useRef} from "react";

interface OutsideClickHandlerProps extends React.HTMLAttributes<HTMLDivElement> {
	onOutsideClick: (value: boolean) => void;
	children?: React.ReactNode;
}

export const OutsideClickHandler: FC<OutsideClickHandlerProps> = ({
	                                                                  onOutsideClick,
	                                                                  children,
	                                                                  style
                                                                  }) => {
	const ref = useRef<HTMLDivElement>({} as HTMLDivElement);
	
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent | TouchEvent) => {
			if (ref.current && e.target && !ref.current.contains(e.target as Node)) {
				onOutsideClick(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onOutsideClick]);
	
	return <div style={{...style}} ref={ref}>{children}</div>;
};
