import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from "./index"
import { SizeInputValues } from "../../constants/SizeInputValue"

const meta: Meta<typeof TextInput> = {
	title: 'shared/TextInput',
	component: TextInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const CommonTextInput: StoryObj<typeof meta> = {
	args: {
		error: '',
		placeholder: 'Text',
		inputSize: SizeInputValues.BIG
	}
}

export const ErrorTextInput: StoryObj<typeof meta> = {
	args: {
		error: 'Ошибка!',
		placeholder: 'Text',
		inputSize: SizeInputValues.BIG
	}
}

export default meta;