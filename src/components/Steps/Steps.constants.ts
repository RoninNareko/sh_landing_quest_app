import { CSSProperties } from "react";
import star9 from "@/assets/images/stars/Star9.png";
import { StepsTypes } from "@/components/Steps/Steps.types";
import styles from "./Steps.module.scss";
import { StarPropsTypes } from "@/common/Star/Star.types";

export const STAR_BACKGROUND_IMAGE_STYLE: CSSProperties = {
  backgroundImage: `url(${star9.src})`,
};

export const steps: StepsTypes[] = [
  {
    id: 1,
    title: "Step 1",
    subTitle: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    id: 2,
    title: "Step 2",
    subTitle: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    id: 3,
    title: "Step 3",
    subTitle: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    id: 4,
    title: "Step 4",
    subTitle: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    id: 5,
    title: "Step 5",
    subTitle: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    id: 6,
    title: "Step 6",
    subTitle: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
];

export const stars: StarPropsTypes[] = [
  {
    id: 1,
    className: styles.midStar,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 2,
    className: styles.midStar1,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 3,
    className: styles.midStar2,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
  {
    id: 4,
    className: styles.midStar3,
    backgroundImage: STAR_BACKGROUND_IMAGE_STYLE,
  },
];
export const circles = Array(6).fill(null);
