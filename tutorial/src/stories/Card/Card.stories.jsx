import React from "react";
import Card from "./Card";
import imgTwo from "@/stories/assets/imgTwo.png";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const ImageCard = Template.bind({});
ImageCard.args = {
  title: "Title One",
  imgSrc: imgTwo,
  description: "Location: New York, NY",
  likes: 200,
};
