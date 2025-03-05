import React from "react";
import Hero from "./Hero";
import cityImage from "@/stories/assets/nycSky.png";

export default {
  title: "Components/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const FullWidthHero = Template.bind({});
FullWidthHero.args = {
  imgSrc: cityImage,
};
