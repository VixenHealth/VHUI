import type { Meta, StoryObj } from '@storybook/react'
import {AppLink} from "../index";
import { Link } from "react-router-dom";

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