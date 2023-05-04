import leftLine from "@/assets/images/lineLeft.svg";
import rightLine from "@/assets/images/LineRight.svg";
import centertLine from "@/assets/images/lineCenter.svg";
import star5 from "@/assets/images/stars/Star5.png";
import { MembersType } from "@/components/HomePage/HomePageAboutUs/HomePageAboutUs.type";
import memberRight from "../../../assets/images/members/memberRight.png";
import memberCenter from "../../../assets/images/members/membercenter.png";
import memberLeft from "../../../assets/images/members/member1.png";
import { CSSProperties } from "react";
import star9 from "@/assets/images/stars/Star9.png";
import star10 from "@/assets/images/stars/Star10.png";
import bg_frontEnd from "@/assets/images/frbg.png";

import styles from "@/components/HomePage/HomePageAboutUs/HomePageAboutUs.module.scss";
import { StarPropsTypes } from "@/common/Star/Star.types";

export const LINE_LEFT_BACKGROUND_IMAGE_STYLE = {
  backgroundImage: `url(${leftLine.src})`,
};
export const LINE_RIGHT_BACKGROUND_IMAGE_STYLE = {
  backgroundImage: `url(${rightLine.src})`,
};

export const LINE_CENTER_BACKGROUND_IMAGE_STYLE = {
  backgroundImage: `url(${centertLine.src})`,
};

export const WHITE_STAR_BACKGROUND_IMAGE_STYLE = {
  backgroundImage: `url(${star5.src})`,
};

export const members: MembersType[] = [
  {
    id: 1,
    name: "Wade Warren",
    description: "Front-end engineers work closely with designers",
    image: memberLeft,
  },
  {
    id: 2,
    name: "Kristin Watson",
    description: "Front-end engineers work closely with designers",
    image: memberCenter,
  },
  {
    id: 3,
    name: "Robert Fox",
    description: "Front-end engineers work closely with designers",
    image: memberRight,
  },
];

export const STAR_BACKGROUND_IMAGE_STYLE: CSSProperties = {
  backgroundImage: `url(${star9.src})`,
};

export const BIG_STAR_BACKGROUND_IMAGE_STYLE: CSSProperties = {
  backgroundImage: `url(${star10.src})`,
};

export const SECTIONS_BACKGROUND_IMAGE_STYLE: CSSProperties = {
  backgroundImage: `url(${bg_frontEnd.src})`,
};

export const starsOne: StarPropsTypes[] = [
  {
    id: 1,
    className: styles.miniStar,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 2,
    className: styles.midStar,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 3,
    className: styles.bigStar,
    backgroundImage: BIG_STAR_BACKGROUND_IMAGE_STYLE,
  },
];

export const lines: StarPropsTypes[] = [
  {
    id: 1,
    className: styles.lineLeft,
    backgroundImage: LINE_LEFT_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 2,
    className: styles.lineCenter,
    backgroundImage: LINE_CENTER_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 3,
    className: styles.lineRight,
    backgroundImage: LINE_RIGHT_BACKGROUND_IMAGE_STYLE,
  },
];
