import type { Meta, StoryObj } from "@storybook/react-webpack5";

import LumAlert from "./LumAlert";

const meta = {
  title: "Components/alert",
  component: LumAlert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LumAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  args: {
    message: "این متن صرفا برای تست این کامپوننت نوشته شده است.",
  },
};
