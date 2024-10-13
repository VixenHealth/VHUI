import type {Meta, StoryObj} from '@storybook/react'
import {Modal} from "./Modal";
import {ModalVariants} from "./types/variants";

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const DefaultModal: StoryObj<typeof meta> = {
	args: {
		isOpen: true,
		style: {width: 600},
		children: "content",
		variant: ModalVariants.BASE,
	}
}

export const DoubleModal: StoryObj<typeof meta> = {
	args: {
		isOpen: true,
		style: {width: 600},
		isDouble: true,
		topContentChildren: 'topContent',
		bottomContentChildren: 'bottomContent',
		variant: ModalVariants.DOUBLE,
	}
}

export default meta;