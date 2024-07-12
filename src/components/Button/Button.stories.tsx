import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from "../index";
import { ColorButtonValues, SizeButtonValues } from "./Button";

const meta = {
	title: 'shared/Button',
	component: Button,
	args: { onClick: fn() }
} satisfies Meta<typeof Button>

export const Primary: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		size: SizeButtonValues.BIG,
		color: ColorButtonValues.DARK,
	}
}
