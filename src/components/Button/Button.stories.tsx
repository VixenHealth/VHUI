import React from "react";
import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {Button} from "../index";
import {ColorButtonValues, SizeButtonValues, VariantButtonValues} from "./Button";
import Icon from "../../assets/close.svg"

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {onClick: fn()},
	decorators: [
		(Story) => (
			<div style={{width: '400px', margin: '0 auto'}}>
				<Story/>
			</div>
		),
	],
}

export const ButtonBigDark: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		size: SizeButtonValues.BIG,
		color: ColorButtonValues.DARK,
	}
}

export const ButtonBigNeutral: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		size: SizeButtonValues.BIG,
		color: ColorButtonValues.NEUTRAL,
	}
}

export const ButtonMediumDark: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		size: SizeButtonValues.MEDIUM,
		color: ColorButtonValues.DARK,
	}
}

export const ButtonMediumNeutral: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		size: SizeButtonValues.MEDIUM,
		color: ColorButtonValues.NEUTRAL,
	}
}

export const ButtonWithIcon: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		size: SizeButtonValues.MEDIUM,
		color: ColorButtonValues.NEUTRAL,
		icon: <img src={Icon} alt="icon"/>
	}
}

export const ButtonWithIconDanger: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		variant: VariantButtonValues.DANGER,
		size: SizeButtonValues.MEDIUM,
		color: ColorButtonValues.NEUTRAL,
		icon: <img src={Icon} alt="icon"/>
	}
}
export default meta;