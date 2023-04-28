import styles from "./HomePageTechnologies.module.scss";
import classNames from "classnames";
import {
  STAR_BACKGROUND_IMAGE_STYLE,
  technologies,
} from "@/components/HomePage/HomePageTechnologies/HomePageTechnologies.constants";
import Technology from "@/components/HomePage/HomePageTechnologies/Technology/Technology";
import { TechnologyType } from "@/components/HomePage/HomePageTechnologies/Technology/Technology.types";

export default function HomePageTechnologies() {
  const cx = classNames.bind(styles);
  return (
    <>
      <header className={cx(styles.headerContainer)}>
        <div className={cx(styles.textContainer)}>
          <h2 className={cx(styles.headerText)}>Programming technologies</h2>
          <div className={cx(styles.subtextCnt)}>
            <p className={cx(styles.subTitle)}>
              By the end, you’ll have the portfolio and interview skills you
              need to start your new career.
            </p>
          </div>
        </div>
      </header>
      <section className={cx(styles.technologiesContainer)}>
        <i
          style={STAR_BACKGROUND_IMAGE_STYLE}
          className={cx(styles.midStar)}
        ></i>
        <section className={cx(styles.technologiesListBlock)}>
          {technologies.map((technology: TechnologyType) => (
            <Technology
              key={technology.id}
              image={technology.image}
              name={technology.name}
            />
          ))}
        </section>
      </section>
    </>
  );
}
