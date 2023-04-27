import styles from "./HomePageAboutUs.module.scss";
import classNames from "classnames";
import Member from "./Member/Member";
import {
  BIG_STAR_BACKGROUND_IMAGE_STYLE,
  LINE_CENTER_BACKGROUND_IMAGE_STYLE,
  LINE_LEFT_BACKGROUND_IMAGE_STYLE,
  LINE_RIGHT_BACKGROUND_IMAGE_STYLE,
  members,
  SECTIONS_BACKGROUND_IMAGE_STYLE,
  WHITE_STAR_BACKGROUND_IMAGE_STYLE,
} from "@/components/HomePage/HomePageAboutUs/HomePageAboutUs.constants";
import { STAR_BACKGROUND_IMAGE_STYLE } from "./HomePageAboutUs.constants";
import { MembersType } from "@/components/HomePage/HomePageAboutUs/HomePageAboutUs.type";

export default function HomePageAboutUs() {
  const cx = classNames.bind(styles);
  return (
    <section className={cx(styles.aboutUscontextContainer)}>
      <section
        className={cx(styles.sections)}
        style={SECTIONS_BACKGROUND_IMAGE_STYLE}
      >
        <i
          className={cx([styles.miniStar])}
          style={STAR_BACKGROUND_IMAGE_STYLE}
        ></i>
        <i
          className={cx([styles.midStar])}
          style={STAR_BACKGROUND_IMAGE_STYLE}
        ></i>
        <i
          className={cx([styles.bigStar])}
          style={BIG_STAR_BACKGROUND_IMAGE_STYLE}
        ></i>
        <div className={cx(styles.mentorsSection)}>
          <div>
            <h3>Mentors</h3>
          </div>
          <section className={cx(styles.linesBlock)}>
            <i
              className={cx(styles.lineLeft)}
              style={LINE_LEFT_BACKGROUND_IMAGE_STYLE}
            ></i>
            <i
              className={cx(styles.lineCenter)}
              style={LINE_CENTER_BACKGROUND_IMAGE_STYLE}
            ></i>
            <i
              className={cx(styles.lineRight)}
              style={LINE_RIGHT_BACKGROUND_IMAGE_STYLE}
            ></i>
          </section>
          <div className={cx(styles.teamContainer)}>
            <i
              className={cx([styles.whiteStar])}
              style={WHITE_STAR_BACKGROUND_IMAGE_STYLE}
            ></i>
            {members.map((member: MembersType, idx: number) => {
              return (
                <Member
                  name={member.name}
                  description={member.description}
                  bottom={idx === 0 || idx === 2}
                  image={member.image}
                />
              );
            })}
          </div>
        </div>
        <div className={cx(styles.textSection)}>
          <p>
            Front-end engineers work closely with designers to make websites
            beautiful, functional, and fast. This Career Path will teach you not
            only the necessary languages and technologies, but how to think like
            a front-end engineer, too.
          </p>
        </div>
      </section>
    </section>
  );
}
