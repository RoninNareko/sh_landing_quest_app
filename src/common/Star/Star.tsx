import styles from "./Star.module.scss";
import classNames from "classnames";
import { StarPropsTypes } from "@/common/Star/Star.types";
import { DEFAULT_STAR_BACKGROUND_IMAGE_STYLE } from "@/common/Star/Star.constants";

const cx = classNames.bind(styles);
export default function Star({
  className = cx(styles.defaultStar),
  backgroundImage = DEFAULT_STAR_BACKGROUND_IMAGE_STYLE,
}: StarPropsTypes) {
  return <i className={className} style={backgroundImage}></i>;
}
