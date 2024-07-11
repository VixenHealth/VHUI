import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from "../index";

const meta = {
	title: 'shared/Button',
	component: Button,
	args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Text'
	}
}
