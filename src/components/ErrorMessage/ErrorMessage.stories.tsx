import type {Meta, StoryObj} from '@storybook/react'
import {ErrorMessage, SizeErrorMessageValues} from "./ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
	title: 'shared/ErrorMessage',
	component: ErrorMessage,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const LargeErrorMessage: StoryObj<typeof meta> = {
	args: {
		message: "message",
		description: "message description",
		size: SizeErrorMessageValues.LARGE
	}
}

export const SmallErrorMessage: StoryObj<typeof meta> = {
	args: {
		message: "message",
		description: "message description",
		size: SizeErrorMessageValues.SMALL
	}
}

export default meta;