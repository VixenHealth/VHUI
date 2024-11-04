import React from "react";
import type {Meta, StoryObj} from '@storybook/react'
import {FileInput} from "./FileInput";

const meta: Meta<typeof FileInput> = {
	title: 'shared/FileInput',
	component: FileInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const FileInputMain: StoryObj<typeof meta> = {
	args: {}
}

export const FileInputMainWithError: StoryObj<typeof meta> = {
	args: {
		error: "Что-то пошло не так!"
	}
}

export const MultipleFileInputMainWithPreview: StoryObj<typeof meta> = {
	args: {
		withPreview: true,
		isMultiple: true,
	}
}

export const FileInputMainWithPreview: StoryObj<typeof meta> = {
	args: {
		withPreview: true,
		isMultiple: false,
	}
}

export default meta;