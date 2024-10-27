import type {Meta, StoryObj} from '@storybook/react'
import Icon from "../../assets/close.svg"
import React from 'react'
import {MultipleSelect} from "./MultipleSelect";

const list = [
	{
		icon: <img src={Icon} alt="" />,
		text: "Text1",
	},
	{
		icon: <img src={Icon} alt=""/>,
		text: "Text2",
	},
	{
		icon: <img src={Icon} alt=""/>,
		text: "Text3",
	},
]

const meta: Meta<typeof MultipleSelect> = {
	title: 'shared/MultipleSelect',
	component: MultipleSelect,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs']
}

export const DefaultMultipleSelect: StoryObj<typeof meta> = {
	args: {
		selectList: list
	}
}

export default meta;