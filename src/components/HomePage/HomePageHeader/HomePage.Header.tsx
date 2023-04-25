import styles from "./HomePageHeader.module.scss";
import classNames from "classnames";

import {
  HEADER_BUTTON_TEXT,
  HEADER_SECTION_STYLE,
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
    </section>
  );
}
