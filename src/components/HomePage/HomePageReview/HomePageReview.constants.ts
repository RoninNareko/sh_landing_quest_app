import { CSSProperties } from "react";
import bg from "@/assets/images/Subtract_bg.png";
import men from "@/assets/images/carousel/imgMen.png";
import { CarouselItemsType } from "@/components/HomePage/HomePageReview/HomePageReview.types";
import star9 from "@/assets/images/stars/Star9.png";

export const STAR_BACKGROUND_IMAGE_STYLE: CSSProperties = {
  backgroundImage: `url(${star9.src})`,
};

export const carouselItems: CarouselItemsType[] = [
  {
    id: 1,
    image: men,
  },
  {
    id: 2,
    image: men,
  },
  {
    id: 3,
    image: men,
  },
];

export const CORUSELE_IMAGE_STYLE: CSSProperties = {
  backgroundImage: `url(${bg.src})`,
};
