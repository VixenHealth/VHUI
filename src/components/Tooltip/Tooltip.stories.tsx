import type {Meta, StoryObj} from '@storybook/react'
import {Tooltip} from "./Tooltip";
import React from 'react';

const meta: Meta<typeof Tooltip> = {
	title: 'shared/Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const BaseTooltip: StoryObj<typeof meta> = {
	args: {
		title: "Свойство fit-content в CSS. Если браузер поддерживает это свойство, оно позволяет подстроить размер блока под размер его содержимого. Пример использования: div { width: fit-content; height: fit-content; }",
		children: <div>children</div>
	}
}

export const BaseTooltipSmallContent: StoryObj<typeof meta> = {
	args: {
		title: "Свойство fit-content в CSS",
		children: <div>children</div>
	}
}

export default meta;