import type { Meta, StoryObj } from "@storybook/react-webpack5";

import LumIcon from "./LumIcon";

const meta = {
  title: "Components/icon",
  component: LumIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LumIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  args: {
    name: "keyboard_arrow_down",
  },
};
