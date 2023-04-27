import styles from "./Member.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { MemberProps } from "@/components/HomePage/HomePageAboutUs/Member/Member.types";

const cx = classNames.bind(styles);

export default function Member({
  bottom = false,
  image,
  name,
  description,
}: MemberProps) {
  return (
    <div className={cx(styles.memberBlock, { [styles.bottom]: bottom })}>
      <div className={cx(styles.memberBlockContext)}>
        <div className={cx(styles.imgBorderCnt)}>
          <Image src={image} alt={name} />
        </div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
