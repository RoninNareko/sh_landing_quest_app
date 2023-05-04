import { CSSProperties } from "react";
import star9 from "@/assets/images/stars/Star9.png";
import { StarPropsTypes } from "@/common/Star/Star.types";
import styles from "./HomePageGallery.module.scss";

export const STAR_BACKGROUND_IMAGE_STYLE: CSSProperties = {
  backgroundImage: `url(${star9.src})`,
};

export const IMG_ALT = "error";

export const stars: StarPropsTypes[] = [
  {
    id: 1,
    className: styles.miniStar,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 2,
    className: styles.miniStar2,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 3,
    className: styles.midStar,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
];
