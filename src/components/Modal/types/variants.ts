import React, {ReactNode} from "react";

export enum ModalVariants {
	BASE,
	DOUBLE
}

export interface Modal extends React.HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean;
	onClose?: () => void;
}

export interface VariantModalBase extends Modal {
	children: ReactNode;
}

export interface VariantModalDouble extends Modal {
	isDouble: true;
	topContentChildren: ReactNode;
	bottomContentChildren: ReactNode;
}