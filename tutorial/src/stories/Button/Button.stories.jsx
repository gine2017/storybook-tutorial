import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: "primary",
  label: "Hello",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  type: "secondary",
  label: "Hello",
};
