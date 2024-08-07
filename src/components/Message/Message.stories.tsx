import type {Meta, StoryObj} from '@storybook/react'
import {Message, SizeErrorMessageValues} from "./Message";

const meta: Meta<typeof Message> = {
	title: 'shared/Message',
	component: Message,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const LargeMessage: StoryObj<typeof meta> = {
	args: {
		message: "message",
		description: "message description",
		size: SizeErrorMessageValues.LARGE,
		onClick: () => {
			console.log("close")
		},
		timeToDelete: 5000
	}
}

export const SmallMessage: StoryObj<typeof meta> = {
	args: {
		message: "message",
		description: "message description",
		size: SizeErrorMessageValues.SMALL,
		onClick: () => {
			console.log("close")
		},
		timeToDelete: 5000
	}
}

export default meta;