import type {Meta, StoryObj} from '@storybook/react'
import {Select} from "./Select";

const meta: Meta<typeof Select> = {
	title: 'shared/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const CommonSelect: StoryObj<typeof meta> = {
	args: {
		title: "Select",
		variants: ["Select1", "Select2", "Select3", "Select4", "Select4", "Select4", "Select4", "Select4"]
	}
}

export const CommonSelectWithDefaultValue: StoryObj<typeof meta> = {
	args: {
		title: "Select",
		variants: ["Select1", "Select2", "Select3", "Select4", "Select4", "Select4", "Select4", "Select4"],
		defaultValue: "Select1"
	}
}

export default meta;