import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import LumButton from "./LumButton";

const meta = {
  title: "Components/button",
  component: LumButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof LumButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  args: {
    children: "کلیک کنید",
  },
};
export const DefaultBlue: Story = {
  name: "default blue",
  args: {
    children: "کلیک کنید",
    blue: true,
  },
};
export const DefaultPink: Story = {
  name: "default pink",
  args: {
    children: "کلیک کنید",
    pink: true,
  },
};
export const DefaultIndigo: Story = {
  name: "default indigo",
  args: {
    children: "کلیک کنید",
    indigo: true,
  },
};
export const DefaultEmerald: Story = {
  name: "default emerald",
  args: {
    children: "کلیک کنید",
    emerald: true,
  },
};
export const RoundedLarge: Story = {
  name: "rounded large",
  args: {
    children: "کلیک کنید",
    rounded: true,
    large: true,
  },
};
export const RoundedMedium: Story = {
  name: "rounded medium",
  args: {
    children: "کلیک کنید",
    rounded: true,
    medium: true,
  },
};
export const RoundedSmall: Story = {
  name: "rounded small",
  args: {
    children: "کلیک کنید",
    rounded: true,
    small: true,
  },
};
export const RoundedXsmall: Story = {
  name: "rounded xsmall",
  args: {
    children: "کلیک کنید",
    rounded: true,
    xsmall: true,
  },
};
export const RoundedMicro: Story = {
  name: "rounded micro",
  args: {
    children: "کلیک کنید",
    rounded: true,
    micro: true,
  },
};
export const RoundedXmicro: Story = {
  name: "rounded xmicro",
  args: {
    children: "کلیک کنید",
    rounded: true,
    xmicro: true,
  },
};
export const RoundedSxmicro: Story = {
  name: "rounded sxmicro",
  args: {
    children: "کلیک کنید",
    rounded: true,
    sxmicro: true,
  },
};
export const RoundedDisabled: Story = {
  name: "rounded disabled",
  args: {
    children: "کلیک کنید",
    rounded: true,
    medium: true,
    disabled: true,
  },
};
export const RectangleLarge: Story = {
  name: "rectangle large",
  args: {
    children: "کلیک کنید",
    rectangle: true,
    large: true,
  },
};
export const RectangleMedium: Story = {
  name: "rectangle medium",
  args: {
    children: "کلیک کنید",
    rectangle: true,
    medium: true,
  },
};
export const RectangleSmall: Story = {
  name: "rectangle small",
  args: {
    children: "کلیک کنید",
    rectangle: true,
    small: true,
  },
};
export const RectangleXsmall: Story = {
  name: "rectangle xsmall",
  args: {
    children: "کلیک کنید",
    rectangle: true,
    xsmall: true,
  },
};
export const RectangleMicro: Story = {
  name: "rectangle micro",
  args: {
    children: "کلیک کنید",
    rectangle: true,
    micro: true,
  },
};
export const RectangleXmicro: Story = {
  name: "rectangle xmicro",
  args: {
    children: "کلیک کنید",
    rectangle: true,
    xmicro: true,
  },
};
export const RectangleSxmicro: Story = {
  name: "rectangle sxmicro",
  args: {
    children: "کلیک کنید",
    rectangle: true,
    sxmicro: true,
  },
};
export const RectangleDisabled: Story = {
  name: "rectangle disabled",
  args: {
    children: "کلیک کنید",
    rectangle: true,
    medium: true,
    disabled: true,
  },
};
export const SecondaryRoundedLarge: Story = {
  name: "secondary rounded large",
  args: {
    children: "کلیک کنید",
    rounded: true,
    large: true,
    secondary: true,
  },
};
export const SecondaryRoundedLargeDisabled: Story = {
  name: "secondary rounded large disabled",
  args: {
    children: "کلیک کنید",
    rounded: true,
    large: true,
    secondary: true,
    disabled: true,
  },
};
