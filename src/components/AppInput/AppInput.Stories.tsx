import type { Meta, StoryObj } from '@storybook/react'
import {AppInput} from "../index";
import {SizeInputValues} from "./AppInput";

const meta: Meta<typeof AppInput> = {
	title: 'shared/AppInput',
	component: AppInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const InputBig: StoryObj<typeof meta> = {
	args: {
		placeholder: 'Text',
		size: SizeInputValues.BIG
	}
}

export default meta;