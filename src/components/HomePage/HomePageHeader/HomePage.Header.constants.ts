import headerBg from "@/assets/images/bgimage.png";

import star9 from "@/assets/images/stars/Star9.png";
import star7 from "@/assets/images/stars/Star7.png";

import { CSSProperties } from "react";
import { StarPropsTypes } from "@/common/Star/Star.types";
import styles from "./HomePageHeader.module.scss";

export const HEADER_SECTION_STYLE: CSSProperties = {
  backgroundImage: `url(${headerBg.src})`,
};

export const LOGO_IMG_ALT = "logo";

export const HEADER_BUTTON_TEXT = "Start my career change";

export const STAR_BACKGROUND_IMAGE_STYLE: CSSProperties = {
  backgroundImage: `url(${star9.src})`,
};

export const BIG_STAR_BACKGROUND_IMAGE_STYLE: CSSProperties = {
  backgroundImage: `url(${star7.src})`,
};

export const stars: StarPropsTypes[] = [
  {
    id: 1,
    className: styles.star_1,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 2,
    className: styles.star_2,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 3,
    className: styles.star_3,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 4,
    className: styles.starBig,
    backgroundImage: BIG_STAR_BACKGROUND_IMAGE_STYLE,
  },
];
