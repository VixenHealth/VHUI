import type { Meta, StoryObj } from '@storybook/react'
import {AppLink} from "../index";

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const Primary: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
	}
}

export default meta;