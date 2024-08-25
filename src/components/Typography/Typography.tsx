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

const VariantTypographyTags = {
	[VariantTypographyValues.H1]: 'h1',
	[VariantTypographyValues.H2]: 'h2',
	[VariantTypographyValues.H3]: 'h3',
	[VariantTypographyValues.H4]: 'h4',
	[VariantTypographyValues.H5]: 'h5',
	[VariantTypographyValues.H6]: 'h6',
	[VariantTypographyValues.SUBTITLE]: 'div',
	[VariantTypographyValues.BODY]: 'div',
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	text: string;
	variant: VariantTypographyValues;
	color?: string;
	fontSize?: string;
	fontWeight?: string;
}

const cx = classNames.bind(styles);

export const Typography: FC<Props> = ({text, variant, fontWeight, fontSize, color, style, ...props}) => {
	const TagName = VariantTypographyTags[variant] as React.ElementType;
	
	return <TagName {...props} style={{color, fontSize, fontWeight, ...style,}} className={cx(variant, 'title')}>{text}</TagName>
};
