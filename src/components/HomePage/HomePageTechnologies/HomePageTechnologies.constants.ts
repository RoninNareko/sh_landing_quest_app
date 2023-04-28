import { TechnologyType } from "@/components/HomePage/HomePageTechnologies/Technology/Technology.types";
import reactImg from "@/assets/images/technologies/react.svg";
import angularImg from "@/assets/images/technologies/angular.svg";
import vueImg from "@/assets/images/technologies/vue.svg";
import javascriptImg from "@/assets/images/technologies/js.svg";
import { CSSProperties } from "react";
import star9 from "@/assets/images/stars/Star9.png";

export const technologies: TechnologyType[] = [
  {
    id: 1,
    name: "Angular",
    image: angularImg,
  },
  {
    id: 2,
    name: "React",
    image: reactImg,
  },
  {
    id: 3,
    name: "Vue.js",
    image: vueImg,
  },
  {
    id: 4,
    name: "Javascript",
    image: javascriptImg,
  },
];

export const STAR_BACKGROUND_IMAGE_STYLE: CSSProperties = {
  backgroundImage: `url(${star9.src})`,
};
