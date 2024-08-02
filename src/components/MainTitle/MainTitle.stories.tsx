import type {Meta, StoryObj} from '@storybook/react'
import {MainTitle} from "../index";
import {SizeMainTitleValues} from "./MainTitle";

const meta: Meta<typeof MainTitle> = {
	title: 'shared/MainTitle',
	component: MainTitle,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const TitleBig: StoryObj<typeof meta> = {
	args: {
		text: 'Text',
		size: SizeMainTitleValues.BIG
	}
}

export default meta;