import React from "react";
import Card from "./Card";
import trees from "@/stories/assets/trees1.png";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const ImageCard = Template.bind({});
ImageCard.args = {
  title: "Title One",
  imgSrc: trees,
  description: "Location: New York, NY",
  likes: 200,
};
