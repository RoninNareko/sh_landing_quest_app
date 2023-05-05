import styles from "./AboutUs.module.scss";
import classNames from "classnames";
import Member from "@/components/Member/Member";
import {
  lines,
  members,
  SECTIONS_BACKGROUND_IMAGE_STYLE,
  stars,
  WHITE_STAR_BACKGROUND_IMAGE_STYLE,
} from "@/components/HomePage/AboutUs/AboutUs.constantsts";
import { MembersType } from "@/components/HomePage/AboutUs/AboutUs.type";
import Star from "@/common/Star/Star";
import { StarPropsTypes } from "@/common/Star/Star.types";
import Line from "@/components/HomePage/AboutUs/Line/Line";

export default function AboutUs() {
  const cx = classNames.bind(styles);
  return (
    <section className={cx(styles.aboutUscontextContainer)}>
      <section
        className={cx(styles.sections)}
        style={SECTIONS_BACKGROUND_IMAGE_STYLE}
      >
        {stars.map(({ id, className, backgroundImage }: StarPropsTypes) => {
          return (
            <Star
              key={id}
              className={className}
              backgroundImage={backgroundImage}
            />
          );
        })}
        <div className={cx(styles.mentorsSection)}>
          <div>
            <h3>Mentors</h3>
          </div>
          <section className={cx(styles.linesBlock)}>
            {lines.map(({ id, className, backgroundImage }: StarPropsTypes) => {
              return (
                <Line
                  key={id}
                  className={className}
                  backgroundImage={backgroundImage}
                />
              );
            })}
          </section>
          <div className={cx(styles.teamContainer)}>
            <Star
              className={cx([styles.whiteStar])}
              backgroundImage={WHITE_STAR_BACKGROUND_IMAGE_STYLE}
            />
            {members.map(
              ({ id, name, description, image }: MembersType, idx: number) => {
                return (
                  <Member
                    key={id}
                    name={name}
                    description={description}
                    bottom={idx === 0 || idx === 2}
                    image={image}
                  />
                );
              }
            )}
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
