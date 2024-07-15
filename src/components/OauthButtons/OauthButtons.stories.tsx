import type { Meta, StoryObj } from '@storybook/react'
import {OauthButtons} from "../index";
import Vk from "../../assets/vk.svg";
import Yandex from "../../assets/yandex.svg";
import Gosuslugi from "../../assets/gosuslugi.svg";

const meta: Meta<typeof OauthButtons> = {
	title: 'shared/OauthButtons',
	component: OauthButtons,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export const Oauth: StoryObj<typeof meta> = {
	args: {}
}

export default meta;