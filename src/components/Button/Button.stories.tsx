import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from "../index";
import { ColorButtonValues, SizeButtonValues } from "./Button";

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	args: { onClick: fn() }
}

export const Primary: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		size: SizeButtonValues.BIG,
		color: ColorButtonValues.DARK,
	}
}

export default meta;