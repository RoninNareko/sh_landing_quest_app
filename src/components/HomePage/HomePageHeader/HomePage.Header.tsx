import styles from "./HomePageHeader.module.scss";
import classNames from "classnames";

import {
  ABOUTUS_SECTION_STYLE,
  BIG_STAR_BACKGROUND_IMAGE_STYLE,
  HEADER_BUTTON_TEXT,
  HEADER_SECTION_STYLE,
  STAR_1_STYLE,
  STAR_2_STYLE,
  STAR_BACKGROUND_IMAGE_STYLE,
  STAR_DEFAULT_STYLE,
  STAR_STYLE,
} from "@/components/HomePage/HomePageHeader/HomePage.Header.constants";
import PageHeader from "@/components/HomePage/HomePageHeader/PageHeader/PageHeader";
import CustomButton from "@/components/common/CustomButton/CustomButton";

export default function HomePageHeader() {
  const cx = classNames.bind(styles);
  return (
    <section
      className={cx(styles.headerSectionContainer)}
      style={HEADER_SECTION_STYLE}
    >
      <PageHeader />
      <div className={cx(styles.contextContainer)}>
        <section className={cx(styles.sectionOne)}>
          <div>
            <h1 className={cx(styles.generalText)}>Front-End</h1>
          </div>
          <div className={cx(styles.minidescCont)}>
            <p>
              Make UIs and websites beautiful, functional, and fast. Cover all
              the topics that expensive bootcamps teach (and more).
            </p>
          </div>
        </section>
        <section className={cx(styles.SectionTwo)}>
          <div className={cx(styles.btnContainer)}>
            <CustomButton value={HEADER_BUTTON_TEXT} />
          </div>
          <div>
            <h1 className={cx(styles.generalText)}>Developer</h1>
          </div>
          <div className={cx(styles.miniTextContainer)}>
            <h3>Courses</h3>
          </div>
        </section>
      </div>

      <header className={cx(styles.headerContainer)}>
        <h2 className={cx(styles.headerText)}>About us</h2>
        <i
          className={cx([styles.star_1])}
          style={STAR_BACKGROUND_IMAGE_STYLE}
        ></i>
        <i
          className={cx([styles.star_2])}
          style={STAR_BACKGROUND_IMAGE_STYLE}
        ></i>
        <i
          className={cx([styles.star_3])}
          style={STAR_BACKGROUND_IMAGE_STYLE}
        ></i>
        <i
          className={cx([styles.starBig])}
          style={BIG_STAR_BACKGROUND_IMAGE_STYLE}
        ></i>
      </header>
    </section>
  );
}
