import type { Meta, StoryObj } from '@storybook/react'
import {Separator} from "../index";
import React from 'react';

const meta: Meta<typeof Separator> = {
	title: 'shared/Separator',
	component: Separator,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div style={{ width: '300px' }}>
				<Story />
			</div>
		),
	],
	tags: ['autodocs'],
}

export const TextSeparator: StoryObj<typeof meta> = {
	args: {
		text: 'Text'
	}
}

export const EmptySeparator: StoryObj<typeof meta> = {
	args: {}
}

export default meta;