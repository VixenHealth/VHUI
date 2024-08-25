import type {Meta, StoryObj} from '@storybook/react'
import {PasswordInput} from "./index"
import {SizeInputValues} from "../../constants/SizeInputValue"

const meta: Meta<typeof PasswordInput> = {
	title: 'shared/PasswordInput',
	component: PasswordInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const CommonPasswordInput: StoryObj<typeof meta> = {
	args: {
		error: '',
		placeholder: 'Text',
		inputSize: SizeInputValues.BIG
	}
}

export const ErrorPasswordInput: StoryObj<typeof meta> = {
	args: {
		error: 'Ошибка!',
		placeholder: 'Text',
		inputSize: SizeInputValues.BIG
	}
}

export const DescriptionPasswordInput: StoryObj<typeof meta> = {
	args: {
		error: '',
		placeholder: 'Text',
		inputSize: SizeInputValues.BIG,
		description: 'Description'
	}
}

export default meta;