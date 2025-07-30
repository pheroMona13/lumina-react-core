import React from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react-webpack5";

import LumAccordion, { LumAccordionGroupProps } from "./LumAccordion";

const meta = {
  title: "Components/accordion",
  component: LumAccordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LumAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<LumAccordionGroupProps> = () => {
  return (
    <div style={{ width: "300px" }}>
      <LumAccordion.Group singleOpen>
        <LumAccordion head="پنل شماره یک" content="متن پنل" />
        <LumAccordion head="پنل شماره دو" content="متن پنل" />
        <LumAccordion head="پنل شماره سه" content="متن پنل" />
        <LumAccordion head="پنل شماره چهار" content="متن پنل" />
      </LumAccordion.Group>
    </div>
  );
};

export const Default: Story = {
  args: {
    head: "پنل بازشونده",
    content:
      "متن تست برای این پنل بازشونده، که برای دموی نحوه‌ی نمایش این پنل نوشته شده است.",
  },
};
export const Group: StoryFn<LumAccordionGroupProps> = Template.bind({});
Group.args = {};
