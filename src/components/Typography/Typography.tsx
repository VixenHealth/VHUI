import React, {FC} from "react";
import classNames from "classnames/bind";
import 'normalize.css'

import styles from "./style.module.scss";

export enum VariantTypographyValues {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
	H5 = 'h5',
	H6 = 'h6',
	SUBTITLE = 'subtitle',
	BODY = 'body',
}

interface Props {
	text: string;
	variant: VariantTypographyValues;
	color?: string;
	fontSize?: string;
	fontWeight?: string;
}

const cx = classNames.bind(styles);

export const Typography: FC<Props> = ({text, variant, fontWeight, fontSize, color}) => {
	const TagName = variant as React.ElementType;
	
	return <TagName style={{color, fontSize, fontWeight}} className={cx(variant, 'title')}>{text}</TagName>
};
