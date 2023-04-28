import headerBg from "@/assets/images/bgimage.png";

import star9 from "@/assets/images/stars/Star9.png";
import star7 from "@/assets/images/stars/Star7.png";

import { CSSProperties } from "react";

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
