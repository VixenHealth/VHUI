import type { Meta, StoryObj } from '@storybook/react'
import {AppCheckbox} from "../index";

const meta: Meta<typeof AppCheckbox> = {
	title: 'shared/AppCheckbox',
	component: AppCheckbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const InputBig: StoryObj<typeof meta> = {
	args: {
		label: 'AppInput',
		id: 'AppInput'
	}
}

export default meta;