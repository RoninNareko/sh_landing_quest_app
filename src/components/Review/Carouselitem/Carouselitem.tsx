import { CORUSELE_IMAGE_STYLE } from "@/components/Review/Review.constants";
import Image from "next/image";
import classNames from "classnames";
import styles from "./CarouselItem.module.scss";
import { CarouselItemProps } from "@/components/Review/Carouselitem/Carouselitem.types";
import { IMG_ALT } from "@/components/Review/Carouselitem/Carouselitem.constants";

export default function Carouselitem({ active, data }: CarouselItemProps) {
  const { image } = data;
  const cx = classNames.bind(styles);
  return (
    <div
      className={cx(styles.imageContainer, {
        [styles.active]: active,
      })}
      style={CORUSELE_IMAGE_STYLE}
    >
      <Image src={image} alt={IMG_ALT} />
    </div>
  );
}
