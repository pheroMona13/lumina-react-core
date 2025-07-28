import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import LumInput from "./LumInput";

const meta = {
  title: "Components/input",
  component: LumInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof LumInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  args: {
    label: "نام و نام خانوادگی",
    placeholder: "متن خود را وارد کنید...",
  },
};
export const Disabled: Story = {
  name: "disabled",
  args: {
    value: "متن تست",
    disabled: true,
  },
};
