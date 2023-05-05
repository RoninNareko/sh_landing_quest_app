import { TechnologyType } from "@/components/HomePage/Technologies/Technology/Technology.types";
import classNames from "classnames";
import styles from "./Technology.module.scss";
import { TECHTNO_CONTAINER_BACKGROUND_STYLE } from "@/components/HomePage/Technologies/Technology/Technology.constants";
import Image from "next/image";

export default function Technology({ name, image }: TechnologyType) {
  const cx = classNames.bind(styles);
  return (
    <section
      style={TECHTNO_CONTAINER_BACKGROUND_STYLE}
      className={cx(styles.technoContainer)}
    >
      <div>
        <Image src={image} alt={name} />
      </div>
      <div>
        <h4> {name}</h4>
      </div>
    </section>
  );
}
