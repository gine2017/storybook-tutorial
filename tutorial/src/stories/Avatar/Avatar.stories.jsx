import React from "react";
import Avatar from "./Avatar";
import girl from "@/stories/assets/girl.png";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Profile = Template.bind({});
Profile.args = {
  imgSrc: girl,
};
