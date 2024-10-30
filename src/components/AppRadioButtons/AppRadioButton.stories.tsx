import type {Meta, StoryObj} from '@storybook/react'
import {AppRadioButtons} from "./index";

const meta: Meta<typeof AppRadioButtons> = {
	title: 'shared/AppRadioButtons',
	component: AppRadioButtons,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const AppRadioButtonsBig: StoryObj<typeof meta> = {
	args: {
		label: 'TextInput',
		id: 'TextInput'
	}
}

export default meta;