import type {Meta, StoryObj} from '@storybook/react'
import {Typography, VariantTypographyValues} from "./Typography";

const meta: Meta<typeof Typography> = {
	title: 'shared/Typography',
	component: Typography,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const TitleH1: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		variant: VariantTypographyValues.H1
	}
}

export const TitleH2: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		variant: VariantTypographyValues.H2
	}
}

export const Subtitle: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		variant: VariantTypographyValues.SUBTITLE
	}
}

export const Body: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		variant: VariantTypographyValues.BODY
	}
}

export const BodyAdditional: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		variant: VariantTypographyValues.BODY,
		color: '#A19F9D',
		fontSize: '24px',
		fontWeight: '700'
	}
}

export default meta;