import type {Preview, StoryFn} from "@storybook/react";
import {RootDecorator} from "./decorators/RootDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: StoryFn) => RootDecorator(Story)
  ]
};

export default preview;
