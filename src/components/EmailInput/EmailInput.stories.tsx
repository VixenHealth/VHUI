import React from 'react';
import type {Meta, StoryObj} from '@storybook/react'
import {SizeInputValues} from "../../constants/SizeInputValue";
import {EmailInput} from "./index";

const meta: Meta<typeof EmailInput> = {
	title: 'shared/EmailInput',
	component: EmailInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const CommonEmailInput: StoryObj<typeof meta> = {
	args: {
		error: '',
		placeholder: 'Text',
		inputSize: SizeInputValues.BIG
	}
}

export const ErrorEmailInput: StoryObj<typeof meta> = {
	args: {
		error: 'Ошибка!',
		placeholder: 'Text',
		inputSize: SizeInputValues.BIG
	}
}

export default meta;