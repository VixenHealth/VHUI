import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from "../index";
import { ColorButtonValues, SizeButtonValues } from "./Button";

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() }
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

export default meta;